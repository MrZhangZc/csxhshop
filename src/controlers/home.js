import mongoose from 'mongoose'

const Ticket = mongoose.model('Ticket')

export const homePage = async ctx => {
    await ctx.render('index', {
        title: '程氏星辉'
    })
}

/**
 *             获取票务信息
 * @param  ctx 
 */
export const fecthTicket = async ctx => {
    try {
        const tickets = await Ticket.find({})
        //console.log('成功拿到票务信息', tickets)
        await ctx.render('ticket', {
            title: '程氏星辉',
            tickets: tickets
        })
    }catch (err) {
        console.log('票务信息出错', err)
    }
}

/**
 *          获取详细信息
 * @param  ctx 
 */
export const specificTicket = async ctx => {

    try{
        const id = ctx.params.id
        console.log(id)

        const ticket = await Ticket.findById(id)

        await ctx.render('specific', {
            title: '票务详情',
            ticket: ticket
        })
    }catch (err){
        console.log('获取详情页失败',err)
    }
}

/**
 *          获取优惠信息
 * @param  ctx 
 */
export const fetchDiscount = async ctx => {
    await ctx.render('discount', {
        title: '程氏星辉',
    })
}

/**
 *          获取珠宝信息
 * @param  ctx 
 */
export const fetchMoney = async ctx => {
    await ctx.render('money', {
        title: '程氏星辉',
    })
}

/**
 *          获取食材信息
 * @param  ctx 
 */
export const fetchCutlery = async ctx => {
    await ctx.render('cutlery', {
        title: '程氏星辉',
    })
}