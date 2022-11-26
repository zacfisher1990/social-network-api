

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            trim:
             true,
            required: "Username is Required",
        }
    }
)