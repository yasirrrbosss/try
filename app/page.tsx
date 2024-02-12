import { getFrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from "next";

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Get BitBase"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs://bafybeig4azwwgnzki3ckbers3gcij5pwmnlynbj6opknijfx6kywylngfa`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'BitBase Pass',
  description: 'Only 3333 BitBase Pass for guaranteed drop',
  openGraph: {
    title: 'BitBase Pass',
    description: 'Only 3333 BitBase Pass for guaranteed drop',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs://bafybeig4azwwgnzki3ckbers3gcij5pwmnlynbj6opknijfx6kywylngfa`],

  },
  other: {
    ...frameMetadata,
  },
};