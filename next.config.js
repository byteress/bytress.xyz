/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/bitress',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://linkedin.com/in/itscyanne',
        permanent: true,
      },
    ]
  },
}
