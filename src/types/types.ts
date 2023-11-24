import { ReactNode } from "react";

export enum SelectedPage{
    Home='home',
    Benefits='benefits',
    OurClasses='ourclasses',
    ContactUs='contactus'
}

export type BenefitType={
    icon:ReactNode;
    title:string;
    text:string
}

export type ClassType={
    img:string;
    title:string;
    text:string;
}