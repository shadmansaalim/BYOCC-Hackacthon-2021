import { Button } from "@chakra-ui/button"
import { AddIcon } from "@chakra-ui/icons"
import { Grid, Text, Box, Flex, Spacer } from "@chakra-ui/layout"
import { DashboardCard } from "@components/Dashboard"
import { useEffect } from "react"
import { useState } from "react"
import useAuth from "src/hooks/useAuth"

export default function Dashboard() {
  return (
    <Box width="80%" margin="10px 10%">
      <Flex direction="row">
        <Text fontSize="2xl" style={{ fontWeight: 'bold' }}>My Loyalty Cards</Text>
        <Spacer />
        <Button leftIcon={<AddIcon />} colorScheme="green">Add</Button>
      </Flex>
      
      <Grid 
        alignItems="center"
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        my="8"
      >
       <DashboardCard></DashboardCard>
       <DashboardCard></DashboardCard>
       <DashboardCard></DashboardCard>
      </Grid>
    </Box>
  )
}

