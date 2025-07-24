import React, { useState } from 'react';
import {
  Box,
  Button,
  Radio,
  Text,
  Title,
  Group,
  Progress,
  Stack,
  Checkbox,
  Container,
} from '@mantine/core';
import { IconArrowLeft, IconArrowRight, IconCheck } from '@tabler/icons-react';

const Questions = () => {

    const [selected, setSelected] = useState(null);
    const [marked, setMarked] = useState(false);

  return (
    <Box style={{ backgroundColor: '#f9f9f7', minHeight: '100vh', padding: '2rem' }}>
      {/* Top Progress bar and question number */}
      <Group position="apart" mb="lg">
        <Progress value={14} radius="xl" size="lg" color="#FFD700" style={{ flex: 1, marginRight: 12 }} />
        <Text size="sm" fw={500}>Question 2/15</Text>
      </Group>

      {/* Question box */}
      <Container size="sm" style={{ backgroundColor: '#f9f9f7', textAlign: 'center' }}>
        <Stack spacing="sm">
          <Title order={3}>Question 14</Title>
          <Text size="md" fw={500}>
            Mauris eget ipsum in justo bibendum pellentesque?
          </Text>

          <Radio.Group value={selected} onChange={setSelected}>
            <Stack spacing="sm" mt="md">
              <Radio
                value="A"
                label="A. Create account on webflow.pdf"
                styles={{
                  body: { backgroundColor: 'white', padding: 12, borderRadius: 10 },
                }}
              />
              <Radio
                value="B"
                label="B. Create account on webflow.pdf"
                styles={{
                  body: { backgroundColor: 'white', padding: 12, borderRadius: 10 },
                }}
              />
              <Radio
                value="C"
                label="C. Create account on webflow.pdf"
                styles={{
                  body: { backgroundColor: 'white', padding: 12, borderRadius: 10 },
                }}
              />
              <Radio
                value="D"
                label="D. Create account on webflow.pdf"
                styles={{
                  body: { backgroundColor: 'white', padding: 12, borderRadius: 10 },
                }}
              />
            </Stack>
          </Radio.Group>

          {/* Mark for later */}
          <Checkbox
            checked={marked}
            onChange={(event) => setMarked(event.currentTarget.checked)}
            label={
              <Group spacing={6}>
                <IconCheck size={16} color="#FFD700" />
                <Text size="sm" fw={500}>Mark question for later</Text>
              </Group>
            }
            mt="sm"
          />
        </Stack>
      </Container>

      {/* Navigation buttons */}
      <Group position="apart" mt="xl">
        <Button
          variant="default"
          leftIcon={<IconArrowLeft size={16} />}
          radius="md"
        >
          Prev
        </Button>
        <Button
          disabled={!selected}
          variant="filled"
          color="#FFD700"
          radius="md"
          rightIcon={<IconArrowRight size={16} />}
          styles={{
            root: {
              color: selected ? '#000' : '#999',
              fontWeight: 500,
            },
          }}
        >
          Next
        </Button>
      </Group>
    </Box>
  );
};

 export default Questions;         