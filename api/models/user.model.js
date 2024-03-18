import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique:true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar:{
        type: String,
        default: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fas1.ftcdn.net%2Fv2%2Fjpg%2F03%2F53%2F11%2F00%2F1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg&tbnid=e4x1eI-jGj2aaM&vet=10CBkQxiAoCmoXChMIoOjWzLOEhAMVAAAAAB0AAAAAEAc..i&imgrefurl=https%3A%2F%2Fstock.adobe.com%2Fimages%2Fdefault-avatar-profile-flat-icon-social-media-user-vector-portrait-of-unknown-a-human-image%2F353110097&docid=9ntBPgPbHGyp8M&w=1000&h=1000&itg=1&q=avatar%20profile&client=avast-a-1&ved=0CBkQxiAoCmoXChMIoOjWzLOEhAMVAAAAAB0AAAAAEAc",
    },
}, 
{ timestamps: true }

);

const User = mongoose.model('User', userSchema);

export default User;