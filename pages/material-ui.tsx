import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { Button, Container, Typography, Box, Link } from '@material-ui/core';

const MaterialUI: NextPage = () => {
  return (
    <Container maxWidth="sm">
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Box my={20}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
      </Box>
    </Container>
  );
};

export default MaterialUI;
