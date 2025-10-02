### Environment variables

To run the app locally provide following environment variables to `.env.development.local` file:

```
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

To run the app in production provide the following environment variables:

- `NEXT_PUBLIC_BASE_URL` - base url of the app. When deploying to a subpath (e.g., GitHub Pages), the path portion (e.g., `/pentafret`) is automatically extracted and used as the Next.js `basePath` configuration.
- `NEXT_PUBLIC_AMPLITUDE_API_KEY` - Amplitude API key
