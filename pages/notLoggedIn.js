import React from "react";
import { Button } from "@material-ui/core";
import Link from 'next/link'

const NotLoggedIn = () => {

  return (
      <div className="not-logged">
        <h1>OPS!</h1>
        <h4>Você precisa estar logado para acessar essa página :(</h4>
        <Link href="/"><Button>Voltar para home</Button></Link>
      </div>
  );
};

export default NotLoggedIn;