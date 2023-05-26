import { ModalRefType } from "@piximind/ds-p-23";
import { ReactNode, Ref } from "react";

enum Elang {
    fr = "fr",
    en = "en",
    ar = "ar",
}
interface ISelectOption {
    label: string,
    value: string,
}
interface IPageProps {
    children: JSX.Element | null | undefined | ReactNode
}
interface ITypePayload {
    type?: string;
    payload?: string;
}
interface IKeys {
    [key: string]: string;
}
interface IKeysModal {
    [key: string]: Ref<ModalRefType | undefined | null>
}
export type {
    IPageProps,
    ITypePayload,
    IKeys,
    ISelectOption,
    IKeysModal
}

export {
    Elang,
}