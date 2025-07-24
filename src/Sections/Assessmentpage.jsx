import React, { useState } from 'react';
import {
  Container,
  Title,
  Text,
  Button,
  Stack,
  Group,
  Badge,
  Center,
} from '@mantine/core';
import CountdownTimer from '../components/CountdownTimer'; // Update path if needed 
import Questions from './Questions';

const Assessmentpage = () => {
  const [started, setStarted] = useState(false);
  const [countdownDone, setCountdownDone] = useState(false);

  return (
    <Center style={{ minHeight: '100vh', backgroundColor: '#fdfdfc' }}>
      <Container size="sm">
        {/* Show Question UI after countdown */}
        {countdownDone ? (
          <Questions />
        ) : started ? (
          // Show fullscreen countdown
          <Center style={{ height: '100vh' }}>
            <CountdownTimer duration={3} onComplete={() => setCountdownDone(true)} />
          </Center>
        ) : (
          // Show welcome screen
          <Stack align="center" spacing="md">
            <Title order={2}>Assessment</Title>

            <Text align="center" color="dimmed">
              Test your knowledge of how Figma helps teams collaboratively brainstorm, build, test, and share designs, and see how you stack up against designers worldwide.
            </Text>

            <Group spacing="xs" position="center" mt="md">
              <Text size="sm" weight={500}>Questions</Text>
              <Badge variant="light" color="gray" size="sm">25</Badge>
              <Text color="gray">•</Text>
              <Text size="sm" weight={500}>Time</Text>
              <Badge variant="light" color="gray" size="sm">25 min</Badge>
            </Group>

            <Button
              color="yellow"
              size="md"
              onClick={() => setStarted(true)}
              styles={{ root: { color: '#000', fontWeight: 600 } }}
            >
              Get Started
            </Button>
          </Stack>
        )}
      </Container>
    </Center>
  );
};

export default Assessmentpage;
