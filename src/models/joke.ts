import mongoose, {Schema} from "mongoose";
import IJoke from "../types/IJoke";

const jokeSchema = new Schema<IJoke>({
    title: {
        type: String,
        unique: false
    },
    answer: {
        type: String
    },
    category: {
        type: String
    }
}, {timestamps: true});

const Joke = mongoose.model("joke", jokeSchema);

export default Joke;