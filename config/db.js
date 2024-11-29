import mongoose from 'mongoose';

const URI =
    'mongodb+srv://newUserFirst:4iJxO9LI1fS5WqfU@atlascluster.vlnrdjk.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster';

mongoose
    .connect(URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((e) => console.error('Connection error', e));
