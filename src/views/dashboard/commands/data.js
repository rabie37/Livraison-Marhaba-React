import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { MoreVertical, FileText } from 'react-feather'
import { Link } from 'react-router-dom'

// ** Vars
const status = {
    1: { title: 'New', color: 'light-danger' },
    2: { title: 'In production', color: 'light-'},
    3: { title: 'In livraison', color: 'light'},
    4: { title: 'Delevred', color: 'light'},
    5: { title: 'Canceled', color: 'light'}

}

// ** Table Server Side Column
export const serverSideColumns = [
    { 
        sortable: true,
        name: 'Address',
        selector: row => row.address

    },
    {
        sortable: true,
        name: 'Status',
        selector: row => {
            console.log('row.status : ', row.status) 
            return status[row.status].title
        }
    },
    { 
        sortable: true,
        name: 'Total',
        selector: row => row.total

    },
    { 
        sortable: true,
        name: 'Created At',
        selector: row => row.createdAt

    },
    { 
        sortable: true,
        name: 'Updated At',
        selector: row => row.updatedAt

    },
    {
        name: 'Actions',
        allowOverflow: true,
        cell: (row) => {
            return (
                <div className='d-flex'>
                    <UncontrolledDropdown>
                        <DropdownToggle className='pe-1' tag='span'>
                            <MoreVertical size={15} />
                        </DropdownToggle>
                        <DropdownMenu end>
                            <DropdownItem tag={Link} to={`/commands/edit/${row.id}`}>
                                <FileText size={15} />
                                <span className='align-middle ms-50'>edit</span>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </div>
            )
        }
    }
]