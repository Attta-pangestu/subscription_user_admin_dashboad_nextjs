import mongoose from "mongoose";


// mongoose.connect(process.env.MONGODB_URI as string);
// mongoose.Promise = global.Promise

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true, 
        unique: true, 
        min: 3, 
        max: 20, 
    }, 
    email: {
        type: String,
        required: true, 
        unique: true, 
    }, 
    password: {
        type: String,
        required: true, 
    }, 
    img: {
        type: String,
    }, 
    role: {
        type: String,
        default: "user",
    },
    status: {
        type: String,
        default: "active",
    }, 
    phone: {
        type: String,
    }, 
    address: {
        type: String,
    }, 
}, 
    {
        timestamps: true
    }
)

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    }, 
    desc: {
        type: String,
        required: true,
    }, 
    price: {
        type: Number,
        required: true,
        min: 0,
    }, 
    stock: {
        type: Number,
        required: true,
        min: 0,
    },
    img: {
        type: String,
    }, 
    color: {
        type: String,
    }, 
    size: {
        type: String,
    }
}, 
    {
        timestamps: true
    }
)


const transactionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
        required: true,
    },
    status: {
        type: String,
        enum: ['Processing', 'Success', 'Failed'],
        default: 'Processing',
    },
    qty: {
        type: Number,
        required: true,
        min: 0,
    },
    total: {
        type: Number,
        required: true,
        min: 0,
    },
}, {
    timestamps: true,
});



export const UserModel = mongoose.models.users || mongoose.model('users', userSchema)
export const ProductModel = mongoose.models.products || mongoose.model('products', productSchema)
export const TransactionModel = mongoose.models.transactions || mongoose.model('transactions', transactionSchema)


