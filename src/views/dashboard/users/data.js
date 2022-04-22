import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { MoreVertical, FileText, Coffee } from 'react-feather'
import { blockUser } from '../../../services/users'
import { Fragment } from 'react'
import { toast, Slide } from 'react-toastify'
import { Link } from 'react-router-dom'
import Avatar from '@components/avatar'

// ** Vars
const status = {
    1: { title: 'Active', color: 'light-success' },
    0: { title: 'Blocked', color: 'light-danger' }
}

const roles = {
    3: { title: 'Client', color: 'light-primary' },
    2: { title: 'Delevry', color: 'light-info' },
    1: { title: 'Admin', color: 'light-warning' }
}


const ToastContent = () => (
    <Fragment>
        <div className='toastify-header'>
            <div className='title-wrapper'>
                <Avatar size='sm' color='success' icon={<Coffee size={12} />} />
                <h6 className='toast-title fw-bold'>Okey</h6>
            </div>
        </div>
        <div className='toastify-body'>
            <span>User Blocked</span>
        </div>
    </Fragment>
)

const blockUserAction = function (userId) {

    blockUser(userId).then(function (response) {
        console.log((response))

        toast.success(
            <ToastContent />,
            { icon: false, transition: Slide, hideProgressBar: true, autoClose: 2000 }
        )
    })
        .catch(function (error) {
            console.log(error)
        })
}

// ** Table Server Side Column
export const serverSideColumns = [
    {
        sortable: true,
        name: 'id',
        selector: row => row.id
    },
    {
        sortable: true,
        name: 'Email',
        selector: row => row.email
    },
    {
        sortable: true,
        name: 'Password',
        selector: row => row.password
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
        name: 'role',
        selector: row => roles[row.role].title
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
                            <DropdownItem tag={Link} to={`/users/edit/${row.id}`}>
                                <FileText size={15} />
                                <span className='align-middle ms-50'>edit</span>
                            </DropdownItem>
                            <DropdownItem onClick={() => {
                                blockUserAction(row.id)
                            }}>
                                <FileText size={15} />
                                <span className='align-middle ms-50'>Block</span>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </div>
            )
        }
    }
]