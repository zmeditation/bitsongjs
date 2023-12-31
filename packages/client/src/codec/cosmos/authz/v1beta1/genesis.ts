/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import { GrantAuthorization } from './authz';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'cosmos.authz.v1beta1';

/** Since: cosmos-sdk 0.43 */

/** GenesisState defines the authz module's genesis state. */
export interface GenesisState {
  $type: 'cosmos.authz.v1beta1.GenesisState';
  authorization: GrantAuthorization[];
}

function createBaseGenesisState(): GenesisState {
  return { $type: 'cosmos.authz.v1beta1.GenesisState', authorization: [] };
}

export const GenesisState = {
  $type: 'cosmos.authz.v1beta1.GenesisState' as const,

  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.authorization) {
      GrantAuthorization.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authorization.push(
            GrantAuthorization.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      $type: GenesisState.$type,
      authorization: Array.isArray(object?.authorization)
        ? object.authorization.map((e: any) => GrantAuthorization.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.authorization) {
      obj.authorization = message.authorization.map(e =>
        e ? GrantAuthorization.toJSON(e) : undefined,
      );
    } else {
      obj.authorization = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I,
  ): GenesisState {
    const message = createBaseGenesisState();
    message.authorization =
      object.authorization?.map(e => GrantAuthorization.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(GenesisState.$type, GenesisState);

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P> | '$type'>]: never;
    };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
