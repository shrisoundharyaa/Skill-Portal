import { connect } from 'mongoose';

const connectDB = async () => {
  try {
    // eslint-disable-next-line no-undef
    await connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    // eslint-disable-next-line no-undef
    process.exit(1);
  }
};

export default connectDB;
