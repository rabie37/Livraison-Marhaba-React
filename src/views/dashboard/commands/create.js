// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label } from 'reactstrap'
import { useForm, Controller } from 'react-hook-form'
import { createCommand} from './../../../services/commands'
import { useHistory } from 'react-router-dom'
import { Fragment } from 'react'
import { Coffee } from 'react-feather'
import { toast, Slide } from 'react-toastify'
import Avatar from '@components/avatar'

const ToastContent = () => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='success' icon={<Coffee size={12} />} />
        <h6 className='toast-title fw-bold'>Okey</h6>
      </div>
    </div>
    <div className='toastify-body'>
      <span>Command created</span>
    </div>
  </Fragment>
)

const CreateForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const history = useHistory()

  const onSubmit = data => {
    console.log(data)
    createCategory(data)
      .then(function (response) {
        console.log((response))

        history.push('/commands/table')
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
        <CardTitle tag='h4'>Command Create Form</CardTitle>
      </CardHeader>

      <CardBody>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md='12' sm='12' className='mb-1'>
              <Label className='form-label' for='name'>
                Name
              </Label>
              <Controller
                id='name'
                name='name'
                control={control}
                render={({ field }) => (
                  <Input
                    autoFocus
                    type='name'
                    placeholder='Pro'
                    invalid={errors.name && true}
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