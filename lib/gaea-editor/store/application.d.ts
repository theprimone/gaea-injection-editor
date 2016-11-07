import * as React from 'react';
import Event from './event';
import { PropsDefine as GaeaPropsDefine } from '../gaea-editor.type';
export default class Application {
    event: Event;
    headerHeight: number;
    leftSidebarWidth: number;
    sidebarWidth: number;
    sidebarAddonWidth: number;
    footerHeight: number;
    isSidebarMoving: boolean;
    isPreview: boolean;
    comboComponents: Array<FitGaea.ComboComponentInfo>;
    currentVersionPage: number;
    versionList: Array<FitGaea.GetPublishListResult>;
    currentVersion: string;
    baseComponents: Array<React.ComponentClass<FitGaea.ComponentProps>>;
    customComponents: Array<React.ComponentClass<FitGaea.ComponentProps>>;
    isHideCustomComponents: boolean;
    title: string;
    height: number;
    isReactNative: boolean;
    explore: boolean;
    setInitPropsToApplication(props: GaeaPropsDefine): void;
    setCustomComponents(customComponents: Array<React.ComponentClass<FitGaea.ComponentProps>>): void;
    addComboComponent(comboComponent: FitGaea.ComboComponentInfo): void;
    getComponentByUniqueKey(uniqueKey: string): React.ComponentClass<FitGaea.ComponentProps>;
    setSidebarWidth(value: number): void;
    setSidebarMoving(isMoving: boolean): void;
    setPreview(isPreview: boolean): void;
    setCurrentVersionPage(page: number): void;
    addVersions(versions: Array<FitGaea.GetPublishListResult>): void;
    setCurrentVersion(version: string): void;
    publishToVersionList(versionInfo: FitGaea.GetPublishListResult): void;
    cleanComponent(componentInfo: FitGaea.ViewportComponentInfo): any;
    cleanComponentProps(componentProps: FitGaea.ComponentProps): any;
    expendComponent(componentInfo: FitGaea.ViewportComponentInfo): FitGaea.ViewportComponentInfo;
    expendComponentProps(componentProps: FitGaea.ComponentProps): FitGaea.ComponentProps;
}