// Copyright 2018-2021 the Deno authors. All rights reserved. MIT license.

import type { ConfigurationScope } from "vscode";

// types shared with typescript-deno-plugin

/** When `vscode.WorkspaceSettings` get serialized, they keys of the
 * configuration are available.  This interface should mirror the configuration
 * contributions made by the extension.
 *
 * **WARNING** please ensure that the `workspaceSettingsKeys` contains all the
 * top level keys of this, as they need to be sent to the server on
 * initialization.
 */
export interface Settings {
  /** Specify an explicit path to the `deno` cache instead of using DENO_DIR
   * or the OS default. */
  cache: string | null;
  certificateStores: string[] | null;
  /** Settings related to code lens. */
  codeLens: {
    implementations: boolean;
    references: boolean;
    referencesAllFunctions: boolean;
    test: boolean;
    testArgs: string[];
  } | null;
  /** A path to a configuration file that should be applied. */
  config: string | null;
  /** Is the extension enabled or not. */
  enable: boolean;
  /** If set, indicates that only the paths in the workspace should be Deno
   * enabled. */
  enablePaths: string[];
  /** A path to an import map that should be applied. */
  importMap: string | null;
  /** A flag that enables additional internal debug information to be printed
   * to the _Deno Language Server_ output. */
  internalDebug: boolean;
  /** Determine if the extension should be providing linting diagnostics. */
  lint: boolean;
  /** Specify an explicit path to the `deno` binary. */
  path: string | null;
  suggest: {
    autoImports: boolean;
    completeFunctionCalls: boolean;
    names: boolean;
    paths: boolean;
    imports: {
      autoDiscover: boolean;
      hosts: Record<string, boolean>;
    } | null;
  } | null;
  tlsCertificate: string | null;
  unsafelyIgnoreCertificateErrors: string[] | null;
  /** Determine if the extension should be type checking against the unstable
   * APIs. */
  unstable: boolean;
}

export interface EnabledPaths {
  /** The file system path of the workspace folder that is partially enabled. */
  workspace: string;
  /** The file system paths that are Deno enabled. */
  paths: string[];
}

export interface PluginSettings {
  documents: Record<string, DocumentSettings>;
  enabledPaths: EnabledPaths[];
  workspace: Settings;
}

export interface DocumentSettings {
  scope: ConfigurationScope;
  settings: Partial<Settings>;
}
