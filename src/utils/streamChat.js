import { StreamChat } from 'stream-chat';

// Stream Chat configuration - public API key (safe to expose)
export const STREAM_API_KEY = import.meta.env.VITE_STREAM_CHAT_API_KEY || 'red6v7mkv75p';

// Initialize Stream Chat client (client-side, without secret)
export const chatClient = StreamChat.getInstance(STREAM_API_KEY);

/**
 * Generate a user token for Stream Chat authentication
 * This calls our backend API to securely generate tokens
 * @param {string} userId - The user ID to generate token for
 * @returns {Promise<string>} JWT token for the user
 */
export const generateUserToken = async (userId) => {
  try {
    // Call the backend API deployed on Vercel
    const response = await fetch('https://doctor-portal-server-beige.vercel.app/api/stream-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, role: 'patient' }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to generate token');
    }
    
    const data = await response.json();
    return data.token;
  } catch (error) {
    console.error('Error generating token:', error);
    // For development/demo, we'll create a temporary workaround
    // In production, this should always call your backend
    throw new Error('Token generation failed. Please ensure your backend API is running.');
  }
};

/**
 * Connect a user to Stream Chat
 * @param {string} userId - Unique user identifier
 * @param {object} userData - User data (name, image, role, etc.)
 * @returns {Promise} Promise that resolves when user is connected
 */
export const connectUser = async (userId, userData) => {
  try {
    const token = generateUserToken(userId);
    
    const user = {
      id: userId,
      name: userData.name || userId,
      image: userData.image || `https://getstream.io/random_png/?id=${userId}&name=${userData.name}`,
      role: userData.role || 'patient', // 'doctor' or 'patient'
      ...userData
    };

    await chatClient.connectUser(user, token);
    return chatClient.user;
  } catch (error) {
    console.error('Error connecting user:', error);
    throw error;
  }
};

/**
 * Disconnect the current user from Stream Chat
 */
export const disconnectUser = async () => {
  try {
    await chatClient.disconnectUser();
  } catch (error) {
    console.error('Error disconnecting user:', error);
  }
};

/**
 * Create or get a consultation channel between doctor and patient
 * @param {string} doctorId - Doctor's user ID
 * @param {string} patientId - Patient's user ID
 * @param {object} channelData - Additional channel data
 * @returns {Promise} Channel object
 */
export const createConsultationChannel = async (doctorId, patientId, channelData = {}) => {
  try {
    const channelId = `consultation-${doctorId}-${patientId}`;
    
    const channel = chatClient.channel('consultation', channelId, {
      name: `Consultation: Dr. ${channelData.doctorName || doctorId} & ${channelData.patientName || patientId}`,
      members: [doctorId, patientId],
      created_by_id: patientId,
      ...channelData
    });

    await channel.create();
    return channel;
  } catch (error) {
    console.error('Error creating consultation channel:', error);
    throw error;
  }
};

/**
 * Get all channels for the current user
 * @param {object} filters - Channel filters
 * @returns {Promise} Array of channels
 */
export const getUserChannels = async (filters = {}) => {
  try {
    const defaultFilters = {
      type: 'consultation',
      members: { $in: [chatClient.userID] }
    };
    
    const response = await chatClient.queryChannels(
      { ...defaultFilters, ...filters },
      { last_message_at: -1 },
      { limit: 20 }
    );
    
    return response;
  } catch (error) {
    console.error('Error getting user channels:', error);
    throw error;
  }
};

/**
 * Mark a channel as read
 * @param {object} channel - Stream Chat channel object
 */
export const markChannelAsRead = async (channel) => {
  try {
    await channel.markRead();
  } catch (error) {
    console.error('Error marking channel as read:', error);
  }
};

/**
 * Send a message to a channel
 * @param {object} channel - Stream Chat channel object
 * @param {string} text - Message text
 * @param {object} attachments - Optional message attachments
 */
export const sendMessage = async (channel, text, attachments = []) => {
  try {
    const message = {
      text,
      attachments
    };
    
    await channel.sendMessage(message);
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};

// Default user configurations for demo purposes
export const DEMO_USERS = {
  doctor: {
    id: 'dr-sarah-johnson',
    name: 'Dr. Sarah Johnson',
    image: '/images/doctor1.jpg',
    role: 'doctor',
    specialization: 'Cardiology',
    online: true
  },
  patient: {
    id: 'patient-john-doe',
    name: 'John Doe',
    image: '/images/patient1.jpg',
    role: 'patient',
    online: true
  }
};

export default chatClient;