import Head from "next/head";
import { useRouter } from "next/router";
import data from "../data.json";
import React from "react";

export default function Home() {
  const router = useRouter();
  const { id = 1 } = router.query;

  const title = data[id]?.title ? data[id].title : data[1].title;
  const description = data[id]?.description ? data[id].description : data[1].description;
  const imageUrl = data[id]?.imageUrl ? data[id].imageUrl : data[1].imageUrl;
  const mintUrl = data[id]?.mintUrl ? data[id].mintUrl : data[1].mintUrl;
  const postUrl = data[id]?.postUrl ? data[id].postUrl : data[1].postUrl;
  const buttons = data[id]?.buttons ? data[id].buttons : data[1].buttons;

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href={data[1].imageUrl} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        =
        <meta name="fc:frame" content="vNext" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={postUrl} />
        <meta property="fc:frame:post_url" content={postUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta name="fc:frame:image" content={imageUrl} />
        {buttons.map((button, index) => (
          <React.Fragment key={index}>
            <meta name={`fc:frame:button:${index}`} content={button.text} />
            <meta name={`fc:frame:button:${index}:action`} content="link" />
            <meta name={`fc:frame:button:${index}:target`} content={button.url} />
          </React.Fragment>
        ))}
      </Head>
      <img src={imageUrl} />
      <a href="https://zora.co/collect/zora:0x6182f15c5b155dae7b2166ed90f554a83fb61557/1">
        <button>Mint NFT</button>
      </a>
    </>
  );
}
