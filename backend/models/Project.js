
import mongoose from 'mongoose';


const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        default: 'pending',
    },
    budget: {
        type: Number,
    },
});


export default mongoose.model('Project', projectSchema);
