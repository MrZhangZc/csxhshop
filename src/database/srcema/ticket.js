import mongoose from 'mongoose'

const Schema = mongoose.Schema

const TicketSchema = new Schema({
    name : String,
    date : String,
    time : String,
    place: String,
    imgUrl: String,
    olePrice: String,
    newPrice: String,
    getTicket: String,
    summery : String,
    explain: {
        type: String,
        default: '1找联系人买票才有优惠，请直接与联系人联系  \n 2 演出票因其特殊性质 一经订票不退换，请您确认后方可订票'
    },
    phone : {
        type: String,
        default: '文静 15010916350'
    },
    meta: {
        createdAt: {
            type: Date,
            default: Date.now()
        },
        updatedAt: {
            type: Date,
            default: Date.now()
        }
    }
})

TicketSchema.pre('save', function (next) {
    if (this.isNew) {
        this.meta.createdAt = this.meta.updatedAt = Date.now()
    } else {
        this.meta.updatedAt = Date.now()
    }

    next()
})

mongoose.model('Ticket', TicketSchema)