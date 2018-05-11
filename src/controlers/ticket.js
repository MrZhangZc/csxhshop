import mongoose from 'mongoose'

const Ticket = mongoose.model('Ticket')

/**
 *              保存票信息
 * @param { name date time place imgUrl olePrice newPrice getTicket summery explain phone} ctx
 */
export const saveTicket = async ctx => {
    try{
        const opts = ctx.request.body
        console.log('1111111111111111',opts.ticket)

        const ticket = new Ticket(opts.ticket)
        const saveTicket = await ticket.save()
        console.log('成功保存票务信息', saveTicket)
        ctx.body = {
            scccess : true,
            ticket  : saveTicket
        }
        ctx.response.redirect('/admin/list')
    }catch (err) {
        console.log('保存票务信息失败', err)
        ctx.body = {
            scccess: false
        }
    }
}

/**
 * 
 * @param {*} ctx 
 */
export const savePage = async ctx => {
    await ctx.render('admin/admin', {
        title: '后台票务录入',
        ticket: {}
    })
}

export const TicketList = async ctx => {

    const tickets = await Ticket.find({})
    await ctx.render('admin/list', {
        title: '票务列表',
        tickets: tickets
    })
}

export const deleteTicket = async ctx => {
    const id = ctx.params.id
    console.log(id)

    try{
        await Ticket.remove({ _id: id })
        console.log('删除成功')
        ctx.response.redirect('/admin/list')
    }catch (err){
        console.log('删除文章失败', err)
    }
}