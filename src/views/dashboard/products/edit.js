// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label } from 'reactstrap'
import { useForm, Controller } from 'react-hook-form'
import { updateProduct, infoProduct } from '../../../services/products'
import { useHistory, useParams } from 'react-router-dom'
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
      <span>Product Updated</span>
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

  //? get info of category and set in form
  infoProduct(id)
    .then(function (response) {
      console.log('Response Info Product : ', response)
      setValue("name", response.data.name)
      setValue("price", response.data.price)
      setValue("description", response.data.decsreption)
    })
    .catch(function (error) {
      console.log(error)
    })

  const history = useHistory()

  const onSubmit = data => {
    console.log(data)

    updateProduct(id, data)
      .then(function (response) {
        console.log((response))

        history.push('/products/table')
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
        <CardTitle tag='h4'>Product Edit Form</CardTitle>
      </CardHeader>

      <CardBody>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md='6' sm='12' className='mb-1'>
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
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='price'>
                Price
              </Label>
              <Controller
                id='price'
                name='price'
                control={control}
                render={({ field }) => (
                  <Input
                    autoFocus
                    type='number'
                    placeholder='price...'
                    invalid={errors.price && true}
                    {...field}
                  />
                )}
              />
            </Col>
            <Col md='12' sm='12' className='mb-1'>
              <Label className='form-label' for='decsription'>
                Decsription
              </Label>
              <Controller
                id='decsription'
                name='decsription'
                control={control}
                render={({ field }) => (
                  <Input
                    autoFocus
                    type='text'
                    placeholder='Decsription...'
                    invalid={errors.decsription && true}
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