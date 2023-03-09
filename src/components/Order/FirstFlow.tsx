import { Box, Card, CardBody } from '@chakra-ui/react'
import firstFlowModel from './FirstFlowModel'
import OrderInput from './OrderInput'
import OrderSelect from './OrderSelect'
import OutlineButton from './OutlineButton'
import { type WizardStep } from './types'

export default function FirstFlow({ step }: WizardStep) {
  const {
    onPickupDateChange,
    onPickupLocationChange,
    onReturnDateChange,
    onReturnLocationChange,
    pickupDate,
    pickupLocation,
    returnDate,
    returnLocation,
    onSubmit
  } = firstFlowModel()

  if (step !== 1) {
    return <></>
  }

  return (
    <Box>
      <Card
        mx="auto"
        maxW="3xl"
        w="full"
        border="1px dashed"
        bg="none"
        borderColor="violet"
      >
        <CardBody display="flex" justifyContent="space-between">
          <Box>
            <OrderInput
              label="Pick-Up Date/Time"
              onChange={onPickupDateChange}
              value={pickupDate}
            />
            <OrderSelect
              label="Pick-Up Location"
              onChange={onPickupLocationChange}
              value={pickupLocation}
            />
          </Box>
          <Box>
            <OrderInput
              label="Return Date/Time"
              onChange={onReturnDateChange}
              value={returnDate}
            />
            <OrderSelect
              label="Return Location"
              onChange={onReturnLocationChange}
              value={returnLocation}
            />
          </Box>
        </CardBody>
      </Card>
      <OutlineButton onClick={onSubmit}>Submit</OutlineButton>
    </Box>
  )
}
