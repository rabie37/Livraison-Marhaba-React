import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { MoreVertical, FileText } from 'react-feather'
import { Link } from 'react-router-dom'

// ** Table Server Side Column
export const serverSideColumns = [
    {
        sortable: true,
        name: 'Id',
        selector: row => row.id
    },
    {
        sortable: true,
        name: 'Name',
        selector: row => row.name
    },
    {
        sortable: true,
        name: 'Description',
        selector: row => row.decsription
    },
    {
        sortable: true,
        name: 'Price',
        selector: row => row.price
    },
    {
        sortable: true,
        name: 'Image',
        selector: row => {
            return <img height="50px" src={`http://localhost:5000/${row.image}`}></img>
        }
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
                            <DropdownItem tag={Link} to={`/products/edit/${row.id}`}>
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