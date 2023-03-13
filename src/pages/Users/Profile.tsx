import { Box, Card, CardBody, Flex } from '@chakra-ui/react'
import Topbar from '../../components/Topbar/Topbar'
import OrderHistory from '../../components/Users/Profile/OrderHistory'
import ProfileDetail from '../../components/Users/Profile/ProfileDetail'
import ProfileName from '../../components/Users/Profile/ProfileName'
import ProfilePicture from '../../components/Users/Profile/ProfilePicture'
import ProfileModel from './ProfileModel'

export default function Profile() {
  const { user, refetch } = ProfileModel()

  return (
    <>
      <Topbar />
      <Box my={5} as="section" px={{ base: 0, md: 24 }}>
        <Card mt={10} mx="auto" shadow="xl" rounded="2xl">
          <CardBody
            display="flex"
            flexDir={{ base: 'column', md: 'row' }}
            justifyContent="space-around"
          >
            <Flex
              gap={12}
              flexDir={{ base: 'column', md: 'row' }}
              alignItems="center"
            >
              <ProfilePicture
                imgUrl={
                  user.photo ?? 'https://soruce.unsplash.com/500x500?potrait'
                }
                fetcher={refetch}
              />
              <ProfileName name={user.name} />
            </Flex>
            <ProfileDetail
              email={user.email}
              phoneNumber={user.tel}
              drivingLicense={user.sim}
              nik={user.nik}
            />
          </CardBody>
        </Card>
        <OrderHistory />
      </Box>
    </>
  )
}
