// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label } from 'reactstrap'
import Select from 'react-select'
import { selectThemeColors } from '@utils'
import { useForm, Controller } from 'react-hook-form'
import { updateUser, infoUser } from '../../../services/users'
import { useHistory, useParams } from 'react-router-dom'
import { Fragment } from 'react'
import { Coffee } from 'react-feather'
import { toast, Slide } from 'react-toastify'
import Avatar from '@components/avatar'

const roleOptions = [
  { value: 0, label: 'Please Select Role' },
  { value: 1, label: 'Admin' },
  { value: 2, label: 'Delevry' },
  { value: 3, label: 'client' }
]

const ToastContent = () => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='success' icon={<Coffee size={12} />} />
        <h6 className='toast-title fw-bold'>Okey</h6>
      </div>
    </div>
    <div className='toastify-body'>
      <span>User Updated</span>
    </div>
  </Fragment>
)

const CreateForm = () => {
  const { id } = useParams()
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm()

  console.log("id : ", id)

  //? get info of user and set in form
  infoUser(id)
    .then(function (response) {
      console.log('Response Info User : ', response)
      setValue("email", response.data.data.email)
      setValue("password", response.data.data.password)
      setValue("role", roleOptions.find((item) => {
        return response.data.data.role === item.value
      }))
    })
    .catch(function (error) {
      console.log(error)
    })

  const history = useHistory()

  const onSubmit = data => {
    console.log(data)

    updateUser(id, data)
      .then(function (response) {
        console.log((response))

        history.push('/users/table')
        toast.success(
          <ToastContent />,
          { icon: false, transition: Slide, hideProgressBar: true, autoClose: 2000 }
        )
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  console.log('Form errors : ', errors)

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>User Edit Form</CardTitle>
      </CardHeader>

      <CardBody>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='cityMulti'>
                Email
              </Label>
              <Controller
                id='email'
                name='email'
                control={control}
                render={({ field }) => (
                  <Input
                    autoFocus
                    type='email'
                    placeholder='john@example.com'
                    invalid={errors.email && true}
                    {...field}
                  />
                )}
              />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='CountryMulti'>
                Password
              </Label>
              <Controller
                id='password'
                name='password'
                control={control}
                render={({ field }) => (
                  <Input
                    autoFocus
                    type='password'
                    placeholder='john'
                    invalid={errors.password && true}
                    {...field}
                  />
                )}
              />
            </Col>

            <Col className='mb-1' md='6' sm='12'>
              <Label className='form-label'>Role</Label>
              <Controller
                id='role'
                name='role'
                control={control}
                render={({ field }) => (
                  <Select
                    theme={selectThemeColors}
                    className='react-select'
                    classNamePrefix='select'
                    defaultValue={roleOptions[0]}
                    name='role'
                    options={roleOptions}
                    isLoading={true}
                    isClearable={false}
                    invalid={errors.email && true}
                    {...field}
                  />
                )}
              />
            </Col>

            <Col sm='12'>
              <div className='d-flex'>
                <Button className='me-1' color='primary' type='submit'>
                  Submit
                </Button>
                <Button outline color='secondary' type='reset'>
                  Reset
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  )
}
export default CreateForm
