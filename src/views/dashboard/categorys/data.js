import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { MoreVertical, FileText } from 'react-feather'
import { Link } from 'react-router-dom'

// ** Table Server Side Column
export const serverSideColumns = [
    {
        sortable: true,
        name: 'id',
        selector: row => row.id
    },
    {
        sortable: true,
        name: 'name',
        selector: row => row.name
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
                            <DropdownItem tag={Link} to={`/categorys/edit/${row.id}`}>
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