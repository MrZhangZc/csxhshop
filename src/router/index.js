import { saveTicket, savePage, TicketList, deleteTicket} from '../controlers/ticket'
import { fecthTicket, specificTicket, fetchDiscount, fetchMoney, fetchCutlery } from '../controlers/home'

const router = require('koa-router')()

router.get('/admin/save', savePage)
router.get('/admin/list', TicketList)
router.post('/admin/ticket/new', saveTicket)

router.get('/ticket/:id', specificTicket)
router.get('/admin/ticket/delete/:id', deleteTicket)

router.get('/', fecthTicket)
router.get('/discount', fetchDiscount)
router.get('/money', fetchMoney)
router.get('/cutlery', fetchCutlery)

module.exports = router