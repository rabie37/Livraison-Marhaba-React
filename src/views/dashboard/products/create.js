// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label, ListGroup, ListGroupItem } from 'reactstrap'
import { useForm, Controller } from 'react-hook-form'
import { createProduct } from './../../../services/products'
import { useHistory } from 'react-router-dom'
import { Fragment, useEffect, useState } from 'react'
import { toast, Slide } from 'react-toastify'
import Avatar from '@components/avatar'
import Select from 'react-select'
import { selectThemeColors } from '@utils'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from './../categorys/store'
// ** Third Party Imports
import { useDropzone } from 'react-dropzone'
import { FileText, X, DownloadCloud, Coffee } from 'react-feather'

const ToastContent = () => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='success' icon={<Coffee size={12} />} />
        <h6 className='toast-title fw-bold'>Okey</h6>
      </div>
    </div>
    <div className='toastify-body'>
      <span>Product created</span>
    </div>
  </Fragment>
)

const CreateForm = () => {
  const dispatch = useDispatch()
  const store = useSelector(state => {
    return state.dataTables.allData.map((item) => {
      return {
        value: item.id,
        label: item.name
      }
    })
  })

  useEffect(() => {
    dispatch(
      getData({})
    )
  }, [dispatch])

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const history = useHistory()

  /* File UpLoad */

  const [files, setFiles] = useState([])

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    onDrop: acceptedFiles => {
      setFiles([...files, ...acceptedFiles.map(file => Object.assign(file))])
    }
  })

  const renderFilePreview = file => {
    if (file.type.startsWith('image')) {
      return <img className='rounded' alt={file.name} src={URL.createObjectURL(file)} height='28' width='28' />
    } else {
      return <FileText size='28' />
    }
  }

  const handleRemoveFile = file => {
    const uploadedFiles = files
    const filtered = uploadedFiles.filter(i => i.name !== file.name)
    setFiles([...filtered])
  }

  const renderFileSize = size => {
    if (Math.round(size / 100) / 10 > 1000) {
      return `${(Math.round(size / 100) / 10000).toFixed(1)} mb`
    } else {
      return `${(Math.round(size / 100) / 10).toFixed(1)} kb`
    }
  }

  const fileList = files.map((file, index) => (
    <ListGroupItem key={`${file.name}-${index}`} className='d-flex align-items-center justify-content-between'>
      <div className='file-details d-flex align-items-center'>
        <div className='file-preview me-1'>{renderFilePreview(file)}</div>
        <div>
          <p className='file-name mb-0'>{file.name}</p>
          <p className='file-size mb-0'>{renderFileSize(file.size)}</p>
        </div>
      </div>
      <Button color='danger' outline size='sm' className='btn-icon' onClick={() => handleRemoveFile(file)}>
        <X size={14} />
      </Button>
    </ListGroupItem>
  ))

  const handleRemoveAllFiles = () => {
    setFiles([])
  }

  console.log('files : ', files)

  /* File UpLoad / */


  const onSubmit = data => {
    console.log(data)
    const finalData = { ...data, image : files[0] }
    console.log('finalData : ', finalData)

    createProduct(finalData)
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
        <CardTitle tag='h4'>Product Create Form</CardTitle>
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
                    type='text'
                    placeholder='Pro'
                    invalid={errors.name && true}
                    {...field}
                  />
                )}
              />
            </Col>

            <Col md='6' sm='12' className='mb-1'>
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
                    placeholder='...'
                    invalid={errors.decsription && true}
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
                    placeholder='100'
                    invalid={errors.price && true}
                    {...field}
                  />
                )}
              />
            </Col>

            <Col className='mb-1' md='6' sm='12'>
              <Label className='form-label'>Category</Label>
              <Controller
                id='categoryId'
                name='categoryId'
                control={control}
                render={({ field }) => (
                  <Select
                    theme={selectThemeColors}
                    className='react-select'
                    classNamePrefix='select'
                    defaultValue={store[0]}
                    name='categoryId'
                    options={store}
                    isLoading={true}
                    isClearable={false}
                    invalid={errors.email && true}
                    {...field}
                  />
                )}
              />
            </Col>

            <div {...getRootProps({ className: 'dropzone' })}>
              <input {...getInputProps()} />
              <div className='d-flex align-items-center justify-content-center flex-column'>
                <DownloadCloud size={64} />
                <h5>Drop Files here or click to upload</h5>
                <p className='text-secondary'>
                  Drop files here or click{' '}
                  <a href='/' onClick={e => e.preventDefault()}>
                    browse
              </a>{' '}
              thorough your machine
            </p>
              </div>
            </div>
            {files.length ? (
              <Fragment>
                <ListGroup className='my-2'>{fileList}</ListGroup>
                <div className='d-flex justify-content-end'>
                  <Button className='me-1' color='danger' outline type='button' onClick={handleRemoveAllFiles}>
                    Remove All
                  </Button>
                  <Button color='primary'>Upload Files</Button>
                </div>
              </Fragment>
            ) : null}

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