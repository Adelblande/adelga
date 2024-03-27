import Link from "next/link";
import styled from "./header.module.css";

import { Handbag } from "@phosphor-icons/react/dist/ssr";
import { CountItem } from "../CountItem";

export function Header() {
  return (
    <header className={styled.header}>
      <Link href="/">
        <h1>Adelga</h1>
      </Link>
      <Link className={styled.boxCount} href={"/cart"}>
        <Handbag size={25} color="#f1e9c9" />
        <CountItem />
      </Link>
    </header>
  );
}
