### Environment variables

To run the app locally provide following environment variables to `.env.development.local` file:

```
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

To run the app in production provide the following environment variables:

- `NEXT_PUBLIC_BASE_URL` - base url of the app. The path portion of this URL (e.g., `/pentafret` from `https://robandpdx.github.io/pentafret/`) will automatically be extracted and used as the Next.js `basePath` to ensure all navigation links work correctly when the app is deployed to a subpath.
- `NEXT_PUBLIC_AMPLITUDE_API_KEY` - Amplitude API key
