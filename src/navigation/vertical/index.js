// ** Navigation imports
import users from './users'
import categorys from './categorys'
import products from './products'
import commands from './commands'

// ** Merge & Export
export default [...users, ...categorys, ...commands, ...products]
