import React from "react";
import { Redirect } from "wouter";
import Gif from "../../components/Gif";
import useGlobalGifs from "../../hooks/useGlobalGifs";
import useSingleGif from "../../hooks/useSingleGif";
import useTitle from "../../hooks/useTitle";
import { Helmet } from "react-helmet";

export default function Detail({ params }) {
  const { gif, loading, isError } = useSingleGif({ id: params.id });
  const title = gif ? gif.title : "";
  useTitle({ title: title });

  if (loading)
    return (
      <>
        <Helmet>
          <title>Cargando. . .</title>
        </Helmet>
        <h1>Cargando . . .</h1>
      </>
    );

  if (isError) return <Redirect to="/404" />;
  if (!gif) return null;

  console.log({ gif });
  return (
    <>
        <Helmet>
            <title>{`${title} | Giffy`}</title>
        </Helmet>
      <Gif {...gif}></Gif>
    </>
  )
}
