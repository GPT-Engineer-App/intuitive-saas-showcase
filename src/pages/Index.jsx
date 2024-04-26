// Complete the Index page component for a SaaS business landing page
import { Box, Button, Container, Flex, Heading, Image, Stack, Text, VStack, Input, Textarea } from "@chakra-ui/react";
import { FaCheckCircle, FaDollarSign, FaStar, FaUserCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex direction="column" align="center" my={10}>
        <Heading as="h1" size="2xl" mb={2}>
          Welcome to Our SaaS Platform
        </Heading>
        <Text fontSize="xl" color="gray.600">
          Revolutionizing your workflow!
        </Text>
        <Button mt={4} colorScheme="blue" size="lg">
          Start Free Trial
        </Button>
      </Flex>

      <Box as="section" py={10}>
        <Heading as="h2" size="xl" mb={6}>
          Key Features
        </Heading>
        <Stack direction={{ base: "column", md: "row" }} spacing={10}>
          <Feature icon={FaCheckCircle} title="Feature 1" description="Description of feature 1." />
          <Feature icon={FaCheckCircle} title="Feature 2" description="Description of feature 2." />
          <Feature icon={FaCheckCircle} title="Feature 3" description="Description of feature 3." />
        </Stack>
      </Box>

      <Box as="section" bg="blue.50" py={10}>
        <Heading as="h2" size="xl" mb={6} textAlign="center">
          Pricing Plans
        </Heading>
        <Stack direction={{ base: "column", md: "row" }} spacing={10} justify="center">
          <PricingPlan planType="Basic" price="Free" features={["Feature A", "Feature B"]} />
          <PricingPlan planType="Pro" price="$9.99/month" features={["Feature A", "Feature B", "Feature C"]} />
          <PricingPlan planType="Enterprise" price="Custom" features={["All Features", "Priority Support"]} />
        </Stack>
      </Box>

      <Box as="section" py={10}>
        <Heading as="h2" size="xl" mb={6}>
          Customer Testimonials
        </Heading>
        <Stack direction={{ base: "column", md: "row" }} spacing={10}>
          <Testimonial avatar="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxNDE1NDY1NHww&ixlib=rb-4.0.3&q=80&w=1080" name="John Doe" role="CEO at ExampleCorp" testimonial="This software has transformed our business operations." />
          <Testimonial avatar="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxNDE1NDY1NHww&ixlib=rb-4.0.3&q=80&w=1080" name="Jane Smith" role="CTO at Innovatech" testimonial="Incredible tool that has saved us countless hours." />
        </Stack>
      </Box>

      <Box as="section" bg="blue.50" py={10}>
        <Heading as="h2" size="xl" mb={6} textAlign="center">
          Contact Us
        </Heading>
        <VStack spacing={4} maxW="lg" mx="auto">
          <Input placeholder="Your Name" />
          <Input placeholder="Your Email" />
          <Textarea placeholder="Your Message" />
          <Button colorScheme="blue">Send Message</Button>
        </VStack>
      </Box>
    </Container>
  );
};

const Feature = ({ icon, title, description }) => (
  <VStack align="start">
    <Box as={icon} size="24px" color="blue.500" />
    <Text fontWeight="bold">{title}</Text>
    <Text color="gray.600">{description}</Text>
  </VStack>
);

const PricingPlan = ({ planType, price, features }) => (
  <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
    <Heading as="h3" size="md">
      {planType}
    </Heading>
    <Text fontSize="2xl" my={2}>
      <FaDollarSign /> {price}
    </Text>
    <Box>
      {features.map((feature) => (
        <Text key={feature}>
          <FaCheckCircle /> {feature}
        </Text>
      ))}
    </Box>
  </Box>
);

const Testimonial = ({ avatar, name, role, testimonial }) => (
  <VStack bg="white" shadow="md" p={5} borderRadius="lg" align="start">
    <Image borderRadius="full" boxSize="50px" src={avatar} alt={name} />
    <Text fontWeight="bold">{name}</Text>
    <Text fontSize="sm">{role}</Text>
    <Text color="gray.600" fontStyle="italic">
      "{testimonial}"
    </Text>
  </VStack>
);

export default Index;
