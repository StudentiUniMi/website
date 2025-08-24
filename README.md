<img src="public/images/horizontal_logo.png" width="110" height="45" align="right" />

# [studentiunimi.it](https://studentiunimi.it/)

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
[![GitHub contributors](https://badgen.net/github/contributors/StudentiUniMi/website)](https://GitHub.com/StudentiUniMi/website/graphs/contributors/)
[![GitHub issues](https://img.shields.io/github/issues/StudentiUniMi/website)](https://github.com/StudentiUniMi/website/issues/)

[studentiunimi.it](https://studentiunimi.it/) is a fully **responsive** website built with [React 19](https://react.dev/), [Next.js 15](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), and [Chakra UI](https://chakra-ui.com/).  
Its goal is to provide services and access to all groups of didactic courses and general-purpose resources for students of the [University of Milan](https://www.unimi.it/).

The website displays data and interacts with a database through the **APIs** provided by the [backend](https://github.com/StudentiUniMi/backend).

## Getting Started

```bash
# Clone the repository
git clone https://github.com/StudentiUniMi/website.git
cd website

# Install dependencies (Node.js 20+ required)
npm install

# Configure environment variables
echo "NEXT_PUBLIC_API_URL=https://api.studentiunimi.it" > .env.local

# Run the development server
npm run dev

# Build and run for production
npm run build
npm run start
