
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Password
 * 
 */
export type Password = $Result.DefaultSelection<Prisma.$PasswordPayload>
/**
 * Model JobPosting
 * 
 */
export type JobPosting = $Result.DefaultSelection<Prisma.$JobPostingPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.password`: Exposes CRUD operations for the **Password** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Passwords
    * const passwords = await prisma.password.findMany()
    * ```
    */
  get password(): Prisma.PasswordDelegate<ExtArgs>;

  /**
   * `prisma.jobPosting`: Exposes CRUD operations for the **JobPosting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobPostings
    * const jobPostings = await prisma.jobPosting.findMany()
    * ```
    */
  get jobPosting(): Prisma.JobPostingDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.8.1
   * Query Engine version: 78caf6feeaed953168c64e15a249c3e9a033ebe2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Password: 'Password',
    JobPosting: 'JobPosting'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'password' | 'jobPosting'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Password: {
        payload: Prisma.$PasswordPayload<ExtArgs>
        fields: Prisma.PasswordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasswordFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PasswordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasswordFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PasswordPayload>
          }
          findFirst: {
            args: Prisma.PasswordFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PasswordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasswordFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PasswordPayload>
          }
          findMany: {
            args: Prisma.PasswordFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PasswordPayload>[]
          }
          create: {
            args: Prisma.PasswordCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PasswordPayload>
          }
          delete: {
            args: Prisma.PasswordDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PasswordPayload>
          }
          update: {
            args: Prisma.PasswordUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PasswordPayload>
          }
          deleteMany: {
            args: Prisma.PasswordDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PasswordUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PasswordUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PasswordPayload>
          }
          aggregate: {
            args: Prisma.PasswordAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePassword>
          }
          groupBy: {
            args: Prisma.PasswordGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PasswordGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasswordCountArgs<ExtArgs>,
            result: $Utils.Optional<PasswordCountAggregateOutputType> | number
          }
        }
      }
      JobPosting: {
        payload: Prisma.$JobPostingPayload<ExtArgs>
        fields: Prisma.JobPostingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobPostingFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobPostingFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>
          }
          findFirst: {
            args: Prisma.JobPostingFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobPostingFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>
          }
          findMany: {
            args: Prisma.JobPostingFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>[]
          }
          create: {
            args: Prisma.JobPostingCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>
          }
          delete: {
            args: Prisma.JobPostingDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>
          }
          update: {
            args: Prisma.JobPostingUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>
          }
          deleteMany: {
            args: Prisma.JobPostingDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.JobPostingUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.JobPostingUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>
          }
          aggregate: {
            args: Prisma.JobPostingAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateJobPosting>
          }
          groupBy: {
            args: Prisma.JobPostingGroupByArgs<ExtArgs>,
            result: $Utils.Optional<JobPostingGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobPostingCountArgs<ExtArgs>,
            result: $Utils.Optional<JobPostingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    jobPostings: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobPostings?: boolean | UserCountOutputTypeCountJobPostingsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJobPostingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobPostingWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
    firstName: string | null
    lastName: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
    firstName: string | null
    lastName: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    createdAt: number
    updatedAt: number
    firstName: number
    lastName: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    firstName?: true
    lastName?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    firstName?: true
    lastName?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    firstName?: true
    lastName?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    createdAt: Date
    updatedAt: Date
    firstName: string
    lastName: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    firstName?: boolean
    lastName?: boolean
    password?: boolean | User$passwordArgs<ExtArgs>
    jobPostings?: boolean | User$jobPostingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    firstName?: boolean
    lastName?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    password?: boolean | User$passwordArgs<ExtArgs>
    jobPostings?: boolean | User$jobPostingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      password: Prisma.$PasswordPayload<ExtArgs> | null
      jobPostings: Prisma.$JobPostingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      createdAt: Date
      updatedAt: Date
      firstName: string
      lastName: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    password<T extends User$passwordArgs<ExtArgs> = {}>(args?: Subset<T, User$passwordArgs<ExtArgs>>): Prisma__PasswordClient<$Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    jobPostings<T extends User$jobPostingsArgs<ExtArgs> = {}>(args?: Subset<T, User$jobPostingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.password
   */
  export type User$passwordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PasswordInclude<ExtArgs> | null
    where?: PasswordWhereInput
  }


  /**
   * User.jobPostings
   */
  export type User$jobPostingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobPostingInclude<ExtArgs> | null
    where?: JobPostingWhereInput
    orderBy?: JobPostingOrderByWithRelationInput | JobPostingOrderByWithRelationInput[]
    cursor?: JobPostingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobPostingScalarFieldEnum | JobPostingScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Password
   */

  export type AggregatePassword = {
    _count: PasswordCountAggregateOutputType | null
    _min: PasswordMinAggregateOutputType | null
    _max: PasswordMaxAggregateOutputType | null
  }

  export type PasswordMinAggregateOutputType = {
    hash: string | null
    userId: string | null
  }

  export type PasswordMaxAggregateOutputType = {
    hash: string | null
    userId: string | null
  }

  export type PasswordCountAggregateOutputType = {
    hash: number
    userId: number
    _all: number
  }


  export type PasswordMinAggregateInputType = {
    hash?: true
    userId?: true
  }

  export type PasswordMaxAggregateInputType = {
    hash?: true
    userId?: true
  }

  export type PasswordCountAggregateInputType = {
    hash?: true
    userId?: true
    _all?: true
  }

  export type PasswordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Password to aggregate.
     */
    where?: PasswordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passwords to fetch.
     */
    orderBy?: PasswordOrderByWithRelationInput | PasswordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasswordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passwords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passwords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Passwords
    **/
    _count?: true | PasswordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordMaxAggregateInputType
  }

  export type GetPasswordAggregateType<T extends PasswordAggregateArgs> = {
        [P in keyof T & keyof AggregatePassword]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePassword[P]>
      : GetScalarType<T[P], AggregatePassword[P]>
  }




  export type PasswordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordWhereInput
    orderBy?: PasswordOrderByWithAggregationInput | PasswordOrderByWithAggregationInput[]
    by: PasswordScalarFieldEnum[] | PasswordScalarFieldEnum
    having?: PasswordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordCountAggregateInputType | true
    _min?: PasswordMinAggregateInputType
    _max?: PasswordMaxAggregateInputType
  }

  export type PasswordGroupByOutputType = {
    hash: string
    userId: string
    _count: PasswordCountAggregateOutputType | null
    _min: PasswordMinAggregateOutputType | null
    _max: PasswordMaxAggregateOutputType | null
  }

  type GetPasswordGroupByPayload<T extends PasswordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordGroupByOutputType[P]>
        }
      >
    >


  export type PasswordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    hash?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["password"]>

  export type PasswordSelectScalar = {
    hash?: boolean
    userId?: boolean
  }

  export type PasswordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $PasswordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Password"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      hash: string
      userId: string
    }, ExtArgs["result"]["password"]>
    composites: {}
  }


  type PasswordGetPayload<S extends boolean | null | undefined | PasswordDefaultArgs> = $Result.GetResult<Prisma.$PasswordPayload, S>

  type PasswordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PasswordFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PasswordCountAggregateInputType | true
    }

  export interface PasswordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Password'], meta: { name: 'Password' } }
    /**
     * Find zero or one Password that matches the filter.
     * @param {PasswordFindUniqueArgs} args - Arguments to find a Password
     * @example
     * // Get one Password
     * const password = await prisma.password.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PasswordFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PasswordFindUniqueArgs<ExtArgs>>
    ): Prisma__PasswordClient<$Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Password that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PasswordFindUniqueOrThrowArgs} args - Arguments to find a Password
     * @example
     * // Get one Password
     * const password = await prisma.password.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PasswordFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PasswordFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PasswordClient<$Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Password that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordFindFirstArgs} args - Arguments to find a Password
     * @example
     * // Get one Password
     * const password = await prisma.password.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PasswordFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PasswordFindFirstArgs<ExtArgs>>
    ): Prisma__PasswordClient<$Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Password that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordFindFirstOrThrowArgs} args - Arguments to find a Password
     * @example
     * // Get one Password
     * const password = await prisma.password.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PasswordFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PasswordFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PasswordClient<$Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Passwords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Passwords
     * const passwords = await prisma.password.findMany()
     * 
     * // Get first 10 Passwords
     * const passwords = await prisma.password.findMany({ take: 10 })
     * 
     * // Only select the `hash`
     * const passwordWithHashOnly = await prisma.password.findMany({ select: { hash: true } })
     * 
    **/
    findMany<T extends PasswordFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PasswordFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Password.
     * @param {PasswordCreateArgs} args - Arguments to create a Password.
     * @example
     * // Create one Password
     * const Password = await prisma.password.create({
     *   data: {
     *     // ... data to create a Password
     *   }
     * })
     * 
    **/
    create<T extends PasswordCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PasswordCreateArgs<ExtArgs>>
    ): Prisma__PasswordClient<$Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Password.
     * @param {PasswordDeleteArgs} args - Arguments to delete one Password.
     * @example
     * // Delete one Password
     * const Password = await prisma.password.delete({
     *   where: {
     *     // ... filter to delete one Password
     *   }
     * })
     * 
    **/
    delete<T extends PasswordDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PasswordDeleteArgs<ExtArgs>>
    ): Prisma__PasswordClient<$Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Password.
     * @param {PasswordUpdateArgs} args - Arguments to update one Password.
     * @example
     * // Update one Password
     * const password = await prisma.password.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PasswordUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PasswordUpdateArgs<ExtArgs>>
    ): Prisma__PasswordClient<$Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Passwords.
     * @param {PasswordDeleteManyArgs} args - Arguments to filter Passwords to delete.
     * @example
     * // Delete a few Passwords
     * const { count } = await prisma.password.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PasswordDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PasswordDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Passwords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Passwords
     * const password = await prisma.password.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PasswordUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PasswordUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Password.
     * @param {PasswordUpsertArgs} args - Arguments to update or create a Password.
     * @example
     * // Update or create a Password
     * const password = await prisma.password.upsert({
     *   create: {
     *     // ... data to create a Password
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Password we want to update
     *   }
     * })
    **/
    upsert<T extends PasswordUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PasswordUpsertArgs<ExtArgs>>
    ): Prisma__PasswordClient<$Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Passwords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordCountArgs} args - Arguments to filter Passwords to count.
     * @example
     * // Count the number of Passwords
     * const count = await prisma.password.count({
     *   where: {
     *     // ... the filter for the Passwords we want to count
     *   }
     * })
    **/
    count<T extends PasswordCountArgs>(
      args?: Subset<T, PasswordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Password.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PasswordAggregateArgs>(args: Subset<T, PasswordAggregateArgs>): Prisma.PrismaPromise<GetPasswordAggregateType<T>>

    /**
     * Group by Password.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PasswordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordGroupByArgs['orderBy'] }
        : { orderBy?: PasswordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PasswordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Password model
   */
  readonly fields: PasswordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Password.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Password model
   */ 
  interface PasswordFieldRefs {
    readonly hash: FieldRef<"Password", 'String'>
    readonly userId: FieldRef<"Password", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Password findUnique
   */
  export type PasswordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PasswordInclude<ExtArgs> | null
    /**
     * Filter, which Password to fetch.
     */
    where: PasswordWhereUniqueInput
  }


  /**
   * Password findUniqueOrThrow
   */
  export type PasswordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PasswordInclude<ExtArgs> | null
    /**
     * Filter, which Password to fetch.
     */
    where: PasswordWhereUniqueInput
  }


  /**
   * Password findFirst
   */
  export type PasswordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PasswordInclude<ExtArgs> | null
    /**
     * Filter, which Password to fetch.
     */
    where?: PasswordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passwords to fetch.
     */
    orderBy?: PasswordOrderByWithRelationInput | PasswordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Passwords.
     */
    cursor?: PasswordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passwords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passwords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Passwords.
     */
    distinct?: PasswordScalarFieldEnum | PasswordScalarFieldEnum[]
  }


  /**
   * Password findFirstOrThrow
   */
  export type PasswordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PasswordInclude<ExtArgs> | null
    /**
     * Filter, which Password to fetch.
     */
    where?: PasswordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passwords to fetch.
     */
    orderBy?: PasswordOrderByWithRelationInput | PasswordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Passwords.
     */
    cursor?: PasswordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passwords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passwords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Passwords.
     */
    distinct?: PasswordScalarFieldEnum | PasswordScalarFieldEnum[]
  }


  /**
   * Password findMany
   */
  export type PasswordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PasswordInclude<ExtArgs> | null
    /**
     * Filter, which Passwords to fetch.
     */
    where?: PasswordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passwords to fetch.
     */
    orderBy?: PasswordOrderByWithRelationInput | PasswordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Passwords.
     */
    cursor?: PasswordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passwords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passwords.
     */
    skip?: number
    distinct?: PasswordScalarFieldEnum | PasswordScalarFieldEnum[]
  }


  /**
   * Password create
   */
  export type PasswordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PasswordInclude<ExtArgs> | null
    /**
     * The data needed to create a Password.
     */
    data: XOR<PasswordCreateInput, PasswordUncheckedCreateInput>
  }


  /**
   * Password update
   */
  export type PasswordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PasswordInclude<ExtArgs> | null
    /**
     * The data needed to update a Password.
     */
    data: XOR<PasswordUpdateInput, PasswordUncheckedUpdateInput>
    /**
     * Choose, which Password to update.
     */
    where: PasswordWhereUniqueInput
  }


  /**
   * Password updateMany
   */
  export type PasswordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Passwords.
     */
    data: XOR<PasswordUpdateManyMutationInput, PasswordUncheckedUpdateManyInput>
    /**
     * Filter which Passwords to update
     */
    where?: PasswordWhereInput
  }


  /**
   * Password upsert
   */
  export type PasswordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PasswordInclude<ExtArgs> | null
    /**
     * The filter to search for the Password to update in case it exists.
     */
    where: PasswordWhereUniqueInput
    /**
     * In case the Password found by the `where` argument doesn't exist, create a new Password with this data.
     */
    create: XOR<PasswordCreateInput, PasswordUncheckedCreateInput>
    /**
     * In case the Password was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasswordUpdateInput, PasswordUncheckedUpdateInput>
  }


  /**
   * Password delete
   */
  export type PasswordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PasswordInclude<ExtArgs> | null
    /**
     * Filter which Password to delete.
     */
    where: PasswordWhereUniqueInput
  }


  /**
   * Password deleteMany
   */
  export type PasswordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Passwords to delete
     */
    where?: PasswordWhereInput
  }


  /**
   * Password without action
   */
  export type PasswordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PasswordInclude<ExtArgs> | null
  }



  /**
   * Model JobPosting
   */

  export type AggregateJobPosting = {
    _count: JobPostingCountAggregateOutputType | null
    _avg: JobPostingAvgAggregateOutputType | null
    _sum: JobPostingSumAggregateOutputType | null
    _min: JobPostingMinAggregateOutputType | null
    _max: JobPostingMaxAggregateOutputType | null
  }

  export type JobPostingAvgAggregateOutputType = {
    salaryMin: number | null
    salaryMax: number | null
  }

  export type JobPostingSumAggregateOutputType = {
    salaryMin: number | null
    salaryMax: number | null
  }

  export type JobPostingMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    authorId: string | null
    jobTitle: string | null
    companyName: string | null
    companyWebsite: string | null
    category: string | null
    employmentType: string | null
    salaryMin: number | null
    salaryMax: number | null
    salaryType: string | null
    partOfTown: string | null
    workPresence: string | null
    jobDescription: string | null
    linkToApply: string | null
    contactEmail: string | null
    contactPhone: string | null
    customInstructions: string | null
  }

  export type JobPostingMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    authorId: string | null
    jobTitle: string | null
    companyName: string | null
    companyWebsite: string | null
    category: string | null
    employmentType: string | null
    salaryMin: number | null
    salaryMax: number | null
    salaryType: string | null
    partOfTown: string | null
    workPresence: string | null
    jobDescription: string | null
    linkToApply: string | null
    contactEmail: string | null
    contactPhone: string | null
    customInstructions: string | null
  }

  export type JobPostingCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    authorId: number
    jobTitle: number
    companyName: number
    companyWebsite: number
    category: number
    employmentType: number
    salaryMin: number
    salaryMax: number
    salaryType: number
    partOfTown: number
    workPresence: number
    jobDescription: number
    linkToApply: number
    contactEmail: number
    contactPhone: number
    customInstructions: number
    _all: number
  }


  export type JobPostingAvgAggregateInputType = {
    salaryMin?: true
    salaryMax?: true
  }

  export type JobPostingSumAggregateInputType = {
    salaryMin?: true
    salaryMax?: true
  }

  export type JobPostingMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
    jobTitle?: true
    companyName?: true
    companyWebsite?: true
    category?: true
    employmentType?: true
    salaryMin?: true
    salaryMax?: true
    salaryType?: true
    partOfTown?: true
    workPresence?: true
    jobDescription?: true
    linkToApply?: true
    contactEmail?: true
    contactPhone?: true
    customInstructions?: true
  }

  export type JobPostingMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
    jobTitle?: true
    companyName?: true
    companyWebsite?: true
    category?: true
    employmentType?: true
    salaryMin?: true
    salaryMax?: true
    salaryType?: true
    partOfTown?: true
    workPresence?: true
    jobDescription?: true
    linkToApply?: true
    contactEmail?: true
    contactPhone?: true
    customInstructions?: true
  }

  export type JobPostingCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
    jobTitle?: true
    companyName?: true
    companyWebsite?: true
    category?: true
    employmentType?: true
    salaryMin?: true
    salaryMax?: true
    salaryType?: true
    partOfTown?: true
    workPresence?: true
    jobDescription?: true
    linkToApply?: true
    contactEmail?: true
    contactPhone?: true
    customInstructions?: true
    _all?: true
  }

  export type JobPostingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobPosting to aggregate.
     */
    where?: JobPostingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobPostings to fetch.
     */
    orderBy?: JobPostingOrderByWithRelationInput | JobPostingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobPostingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobPostings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobPostings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobPostings
    **/
    _count?: true | JobPostingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobPostingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobPostingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobPostingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobPostingMaxAggregateInputType
  }

  export type GetJobPostingAggregateType<T extends JobPostingAggregateArgs> = {
        [P in keyof T & keyof AggregateJobPosting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobPosting[P]>
      : GetScalarType<T[P], AggregateJobPosting[P]>
  }




  export type JobPostingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobPostingWhereInput
    orderBy?: JobPostingOrderByWithAggregationInput | JobPostingOrderByWithAggregationInput[]
    by: JobPostingScalarFieldEnum[] | JobPostingScalarFieldEnum
    having?: JobPostingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobPostingCountAggregateInputType | true
    _avg?: JobPostingAvgAggregateInputType
    _sum?: JobPostingSumAggregateInputType
    _min?: JobPostingMinAggregateInputType
    _max?: JobPostingMaxAggregateInputType
  }

  export type JobPostingGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    authorId: string
    jobTitle: string
    companyName: string
    companyWebsite: string | null
    category: string
    employmentType: string
    salaryMin: number | null
    salaryMax: number | null
    salaryType: string
    partOfTown: string | null
    workPresence: string
    jobDescription: string
    linkToApply: string | null
    contactEmail: string | null
    contactPhone: string | null
    customInstructions: string | null
    _count: JobPostingCountAggregateOutputType | null
    _avg: JobPostingAvgAggregateOutputType | null
    _sum: JobPostingSumAggregateOutputType | null
    _min: JobPostingMinAggregateOutputType | null
    _max: JobPostingMaxAggregateOutputType | null
  }

  type GetJobPostingGroupByPayload<T extends JobPostingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobPostingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobPostingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobPostingGroupByOutputType[P]>
            : GetScalarType<T[P], JobPostingGroupByOutputType[P]>
        }
      >
    >


  export type JobPostingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorId?: boolean
    jobTitle?: boolean
    companyName?: boolean
    companyWebsite?: boolean
    category?: boolean
    employmentType?: boolean
    salaryMin?: boolean
    salaryMax?: boolean
    salaryType?: boolean
    partOfTown?: boolean
    workPresence?: boolean
    jobDescription?: boolean
    linkToApply?: boolean
    contactEmail?: boolean
    contactPhone?: boolean
    customInstructions?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobPosting"]>

  export type JobPostingSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorId?: boolean
    jobTitle?: boolean
    companyName?: boolean
    companyWebsite?: boolean
    category?: boolean
    employmentType?: boolean
    salaryMin?: boolean
    salaryMax?: boolean
    salaryType?: boolean
    partOfTown?: boolean
    workPresence?: boolean
    jobDescription?: boolean
    linkToApply?: boolean
    contactEmail?: boolean
    contactPhone?: boolean
    customInstructions?: boolean
  }

  export type JobPostingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $JobPostingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobPosting"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      authorId: string
      jobTitle: string
      companyName: string
      companyWebsite: string | null
      category: string
      employmentType: string
      salaryMin: number | null
      salaryMax: number | null
      salaryType: string
      partOfTown: string | null
      workPresence: string
      jobDescription: string
      linkToApply: string | null
      contactEmail: string | null
      contactPhone: string | null
      customInstructions: string | null
    }, ExtArgs["result"]["jobPosting"]>
    composites: {}
  }


  type JobPostingGetPayload<S extends boolean | null | undefined | JobPostingDefaultArgs> = $Result.GetResult<Prisma.$JobPostingPayload, S>

  type JobPostingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<JobPostingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: JobPostingCountAggregateInputType | true
    }

  export interface JobPostingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobPosting'], meta: { name: 'JobPosting' } }
    /**
     * Find zero or one JobPosting that matches the filter.
     * @param {JobPostingFindUniqueArgs} args - Arguments to find a JobPosting
     * @example
     * // Get one JobPosting
     * const jobPosting = await prisma.jobPosting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends JobPostingFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, JobPostingFindUniqueArgs<ExtArgs>>
    ): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one JobPosting that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {JobPostingFindUniqueOrThrowArgs} args - Arguments to find a JobPosting
     * @example
     * // Get one JobPosting
     * const jobPosting = await prisma.jobPosting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends JobPostingFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, JobPostingFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first JobPosting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingFindFirstArgs} args - Arguments to find a JobPosting
     * @example
     * // Get one JobPosting
     * const jobPosting = await prisma.jobPosting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends JobPostingFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, JobPostingFindFirstArgs<ExtArgs>>
    ): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first JobPosting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingFindFirstOrThrowArgs} args - Arguments to find a JobPosting
     * @example
     * // Get one JobPosting
     * const jobPosting = await prisma.jobPosting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends JobPostingFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, JobPostingFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more JobPostings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobPostings
     * const jobPostings = await prisma.jobPosting.findMany()
     * 
     * // Get first 10 JobPostings
     * const jobPostings = await prisma.jobPosting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobPostingWithIdOnly = await prisma.jobPosting.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends JobPostingFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JobPostingFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a JobPosting.
     * @param {JobPostingCreateArgs} args - Arguments to create a JobPosting.
     * @example
     * // Create one JobPosting
     * const JobPosting = await prisma.jobPosting.create({
     *   data: {
     *     // ... data to create a JobPosting
     *   }
     * })
     * 
    **/
    create<T extends JobPostingCreateArgs<ExtArgs>>(
      args: SelectSubset<T, JobPostingCreateArgs<ExtArgs>>
    ): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a JobPosting.
     * @param {JobPostingDeleteArgs} args - Arguments to delete one JobPosting.
     * @example
     * // Delete one JobPosting
     * const JobPosting = await prisma.jobPosting.delete({
     *   where: {
     *     // ... filter to delete one JobPosting
     *   }
     * })
     * 
    **/
    delete<T extends JobPostingDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, JobPostingDeleteArgs<ExtArgs>>
    ): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one JobPosting.
     * @param {JobPostingUpdateArgs} args - Arguments to update one JobPosting.
     * @example
     * // Update one JobPosting
     * const jobPosting = await prisma.jobPosting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends JobPostingUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, JobPostingUpdateArgs<ExtArgs>>
    ): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more JobPostings.
     * @param {JobPostingDeleteManyArgs} args - Arguments to filter JobPostings to delete.
     * @example
     * // Delete a few JobPostings
     * const { count } = await prisma.jobPosting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends JobPostingDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JobPostingDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobPostings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobPostings
     * const jobPosting = await prisma.jobPosting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends JobPostingUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, JobPostingUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one JobPosting.
     * @param {JobPostingUpsertArgs} args - Arguments to update or create a JobPosting.
     * @example
     * // Update or create a JobPosting
     * const jobPosting = await prisma.jobPosting.upsert({
     *   create: {
     *     // ... data to create a JobPosting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobPosting we want to update
     *   }
     * })
    **/
    upsert<T extends JobPostingUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, JobPostingUpsertArgs<ExtArgs>>
    ): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of JobPostings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingCountArgs} args - Arguments to filter JobPostings to count.
     * @example
     * // Count the number of JobPostings
     * const count = await prisma.jobPosting.count({
     *   where: {
     *     // ... the filter for the JobPostings we want to count
     *   }
     * })
    **/
    count<T extends JobPostingCountArgs>(
      args?: Subset<T, JobPostingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobPostingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobPosting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobPostingAggregateArgs>(args: Subset<T, JobPostingAggregateArgs>): Prisma.PrismaPromise<GetJobPostingAggregateType<T>>

    /**
     * Group by JobPosting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobPostingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobPostingGroupByArgs['orderBy'] }
        : { orderBy?: JobPostingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobPostingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobPostingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobPosting model
   */
  readonly fields: JobPostingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobPosting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobPostingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the JobPosting model
   */ 
  interface JobPostingFieldRefs {
    readonly id: FieldRef<"JobPosting", 'String'>
    readonly createdAt: FieldRef<"JobPosting", 'DateTime'>
    readonly updatedAt: FieldRef<"JobPosting", 'DateTime'>
    readonly authorId: FieldRef<"JobPosting", 'String'>
    readonly jobTitle: FieldRef<"JobPosting", 'String'>
    readonly companyName: FieldRef<"JobPosting", 'String'>
    readonly companyWebsite: FieldRef<"JobPosting", 'String'>
    readonly category: FieldRef<"JobPosting", 'String'>
    readonly employmentType: FieldRef<"JobPosting", 'String'>
    readonly salaryMin: FieldRef<"JobPosting", 'Float'>
    readonly salaryMax: FieldRef<"JobPosting", 'Float'>
    readonly salaryType: FieldRef<"JobPosting", 'String'>
    readonly partOfTown: FieldRef<"JobPosting", 'String'>
    readonly workPresence: FieldRef<"JobPosting", 'String'>
    readonly jobDescription: FieldRef<"JobPosting", 'String'>
    readonly linkToApply: FieldRef<"JobPosting", 'String'>
    readonly contactEmail: FieldRef<"JobPosting", 'String'>
    readonly contactPhone: FieldRef<"JobPosting", 'String'>
    readonly customInstructions: FieldRef<"JobPosting", 'String'>
  }
    

  // Custom InputTypes

  /**
   * JobPosting findUnique
   */
  export type JobPostingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobPostingInclude<ExtArgs> | null
    /**
     * Filter, which JobPosting to fetch.
     */
    where: JobPostingWhereUniqueInput
  }


  /**
   * JobPosting findUniqueOrThrow
   */
  export type JobPostingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobPostingInclude<ExtArgs> | null
    /**
     * Filter, which JobPosting to fetch.
     */
    where: JobPostingWhereUniqueInput
  }


  /**
   * JobPosting findFirst
   */
  export type JobPostingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobPostingInclude<ExtArgs> | null
    /**
     * Filter, which JobPosting to fetch.
     */
    where?: JobPostingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobPostings to fetch.
     */
    orderBy?: JobPostingOrderByWithRelationInput | JobPostingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobPostings.
     */
    cursor?: JobPostingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobPostings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobPostings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobPostings.
     */
    distinct?: JobPostingScalarFieldEnum | JobPostingScalarFieldEnum[]
  }


  /**
   * JobPosting findFirstOrThrow
   */
  export type JobPostingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobPostingInclude<ExtArgs> | null
    /**
     * Filter, which JobPosting to fetch.
     */
    where?: JobPostingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobPostings to fetch.
     */
    orderBy?: JobPostingOrderByWithRelationInput | JobPostingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobPostings.
     */
    cursor?: JobPostingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobPostings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobPostings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobPostings.
     */
    distinct?: JobPostingScalarFieldEnum | JobPostingScalarFieldEnum[]
  }


  /**
   * JobPosting findMany
   */
  export type JobPostingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobPostingInclude<ExtArgs> | null
    /**
     * Filter, which JobPostings to fetch.
     */
    where?: JobPostingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobPostings to fetch.
     */
    orderBy?: JobPostingOrderByWithRelationInput | JobPostingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobPostings.
     */
    cursor?: JobPostingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobPostings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobPostings.
     */
    skip?: number
    distinct?: JobPostingScalarFieldEnum | JobPostingScalarFieldEnum[]
  }


  /**
   * JobPosting create
   */
  export type JobPostingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobPostingInclude<ExtArgs> | null
    /**
     * The data needed to create a JobPosting.
     */
    data: XOR<JobPostingCreateInput, JobPostingUncheckedCreateInput>
  }


  /**
   * JobPosting update
   */
  export type JobPostingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobPostingInclude<ExtArgs> | null
    /**
     * The data needed to update a JobPosting.
     */
    data: XOR<JobPostingUpdateInput, JobPostingUncheckedUpdateInput>
    /**
     * Choose, which JobPosting to update.
     */
    where: JobPostingWhereUniqueInput
  }


  /**
   * JobPosting updateMany
   */
  export type JobPostingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobPostings.
     */
    data: XOR<JobPostingUpdateManyMutationInput, JobPostingUncheckedUpdateManyInput>
    /**
     * Filter which JobPostings to update
     */
    where?: JobPostingWhereInput
  }


  /**
   * JobPosting upsert
   */
  export type JobPostingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobPostingInclude<ExtArgs> | null
    /**
     * The filter to search for the JobPosting to update in case it exists.
     */
    where: JobPostingWhereUniqueInput
    /**
     * In case the JobPosting found by the `where` argument doesn't exist, create a new JobPosting with this data.
     */
    create: XOR<JobPostingCreateInput, JobPostingUncheckedCreateInput>
    /**
     * In case the JobPosting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobPostingUpdateInput, JobPostingUncheckedUpdateInput>
  }


  /**
   * JobPosting delete
   */
  export type JobPostingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobPostingInclude<ExtArgs> | null
    /**
     * Filter which JobPosting to delete.
     */
    where: JobPostingWhereUniqueInput
  }


  /**
   * JobPosting deleteMany
   */
  export type JobPostingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobPostings to delete
     */
    where?: JobPostingWhereInput
  }


  /**
   * JobPosting without action
   */
  export type JobPostingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobPostingInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    firstName: 'firstName',
    lastName: 'lastName'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PasswordScalarFieldEnum: {
    hash: 'hash',
    userId: 'userId'
  };

  export type PasswordScalarFieldEnum = (typeof PasswordScalarFieldEnum)[keyof typeof PasswordScalarFieldEnum]


  export const JobPostingScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    authorId: 'authorId',
    jobTitle: 'jobTitle',
    companyName: 'companyName',
    companyWebsite: 'companyWebsite',
    category: 'category',
    employmentType: 'employmentType',
    salaryMin: 'salaryMin',
    salaryMax: 'salaryMax',
    salaryType: 'salaryType',
    partOfTown: 'partOfTown',
    workPresence: 'workPresence',
    jobDescription: 'jobDescription',
    linkToApply: 'linkToApply',
    contactEmail: 'contactEmail',
    contactPhone: 'contactPhone',
    customInstructions: 'customInstructions'
  };

  export type JobPostingScalarFieldEnum = (typeof JobPostingScalarFieldEnum)[keyof typeof JobPostingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: XOR<PasswordNullableRelationFilter, PasswordWhereInput> | null
    jobPostings?: JobPostingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    password?: PasswordOrderByWithRelationInput
    jobPostings?: JobPostingOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: XOR<PasswordNullableRelationFilter, PasswordWhereInput> | null
    jobPostings?: JobPostingListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
  }

  export type PasswordWhereInput = {
    AND?: PasswordWhereInput | PasswordWhereInput[]
    OR?: PasswordWhereInput[]
    NOT?: PasswordWhereInput | PasswordWhereInput[]
    hash?: StringFilter<"Password"> | string
    userId?: StringFilter<"Password"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type PasswordOrderByWithRelationInput = {
    hash?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PasswordWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: PasswordWhereInput | PasswordWhereInput[]
    OR?: PasswordWhereInput[]
    NOT?: PasswordWhereInput | PasswordWhereInput[]
    hash?: StringFilter<"Password"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "userId">

  export type PasswordOrderByWithAggregationInput = {
    hash?: SortOrder
    userId?: SortOrder
    _count?: PasswordCountOrderByAggregateInput
    _max?: PasswordMaxOrderByAggregateInput
    _min?: PasswordMinOrderByAggregateInput
  }

  export type PasswordScalarWhereWithAggregatesInput = {
    AND?: PasswordScalarWhereWithAggregatesInput | PasswordScalarWhereWithAggregatesInput[]
    OR?: PasswordScalarWhereWithAggregatesInput[]
    NOT?: PasswordScalarWhereWithAggregatesInput | PasswordScalarWhereWithAggregatesInput[]
    hash?: StringWithAggregatesFilter<"Password"> | string
    userId?: StringWithAggregatesFilter<"Password"> | string
  }

  export type JobPostingWhereInput = {
    AND?: JobPostingWhereInput | JobPostingWhereInput[]
    OR?: JobPostingWhereInput[]
    NOT?: JobPostingWhereInput | JobPostingWhereInput[]
    id?: StringFilter<"JobPosting"> | string
    createdAt?: DateTimeFilter<"JobPosting"> | Date | string
    updatedAt?: DateTimeFilter<"JobPosting"> | Date | string
    authorId?: StringFilter<"JobPosting"> | string
    jobTitle?: StringFilter<"JobPosting"> | string
    companyName?: StringFilter<"JobPosting"> | string
    companyWebsite?: StringNullableFilter<"JobPosting"> | string | null
    category?: StringFilter<"JobPosting"> | string
    employmentType?: StringFilter<"JobPosting"> | string
    salaryMin?: FloatNullableFilter<"JobPosting"> | number | null
    salaryMax?: FloatNullableFilter<"JobPosting"> | number | null
    salaryType?: StringFilter<"JobPosting"> | string
    partOfTown?: StringNullableFilter<"JobPosting"> | string | null
    workPresence?: StringFilter<"JobPosting"> | string
    jobDescription?: StringFilter<"JobPosting"> | string
    linkToApply?: StringNullableFilter<"JobPosting"> | string | null
    contactEmail?: StringNullableFilter<"JobPosting"> | string | null
    contactPhone?: StringNullableFilter<"JobPosting"> | string | null
    customInstructions?: StringNullableFilter<"JobPosting"> | string | null
    author?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type JobPostingOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    jobTitle?: SortOrder
    companyName?: SortOrder
    companyWebsite?: SortOrderInput | SortOrder
    category?: SortOrder
    employmentType?: SortOrder
    salaryMin?: SortOrderInput | SortOrder
    salaryMax?: SortOrderInput | SortOrder
    salaryType?: SortOrder
    partOfTown?: SortOrderInput | SortOrder
    workPresence?: SortOrder
    jobDescription?: SortOrder
    linkToApply?: SortOrderInput | SortOrder
    contactEmail?: SortOrderInput | SortOrder
    contactPhone?: SortOrderInput | SortOrder
    customInstructions?: SortOrderInput | SortOrder
    author?: UserOrderByWithRelationInput
  }

  export type JobPostingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JobPostingWhereInput | JobPostingWhereInput[]
    OR?: JobPostingWhereInput[]
    NOT?: JobPostingWhereInput | JobPostingWhereInput[]
    createdAt?: DateTimeFilter<"JobPosting"> | Date | string
    updatedAt?: DateTimeFilter<"JobPosting"> | Date | string
    authorId?: StringFilter<"JobPosting"> | string
    jobTitle?: StringFilter<"JobPosting"> | string
    companyName?: StringFilter<"JobPosting"> | string
    companyWebsite?: StringNullableFilter<"JobPosting"> | string | null
    category?: StringFilter<"JobPosting"> | string
    employmentType?: StringFilter<"JobPosting"> | string
    salaryMin?: FloatNullableFilter<"JobPosting"> | number | null
    salaryMax?: FloatNullableFilter<"JobPosting"> | number | null
    salaryType?: StringFilter<"JobPosting"> | string
    partOfTown?: StringNullableFilter<"JobPosting"> | string | null
    workPresence?: StringFilter<"JobPosting"> | string
    jobDescription?: StringFilter<"JobPosting"> | string
    linkToApply?: StringNullableFilter<"JobPosting"> | string | null
    contactEmail?: StringNullableFilter<"JobPosting"> | string | null
    contactPhone?: StringNullableFilter<"JobPosting"> | string | null
    customInstructions?: StringNullableFilter<"JobPosting"> | string | null
    author?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type JobPostingOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    jobTitle?: SortOrder
    companyName?: SortOrder
    companyWebsite?: SortOrderInput | SortOrder
    category?: SortOrder
    employmentType?: SortOrder
    salaryMin?: SortOrderInput | SortOrder
    salaryMax?: SortOrderInput | SortOrder
    salaryType?: SortOrder
    partOfTown?: SortOrderInput | SortOrder
    workPresence?: SortOrder
    jobDescription?: SortOrder
    linkToApply?: SortOrderInput | SortOrder
    contactEmail?: SortOrderInput | SortOrder
    contactPhone?: SortOrderInput | SortOrder
    customInstructions?: SortOrderInput | SortOrder
    _count?: JobPostingCountOrderByAggregateInput
    _avg?: JobPostingAvgOrderByAggregateInput
    _max?: JobPostingMaxOrderByAggregateInput
    _min?: JobPostingMinOrderByAggregateInput
    _sum?: JobPostingSumOrderByAggregateInput
  }

  export type JobPostingScalarWhereWithAggregatesInput = {
    AND?: JobPostingScalarWhereWithAggregatesInput | JobPostingScalarWhereWithAggregatesInput[]
    OR?: JobPostingScalarWhereWithAggregatesInput[]
    NOT?: JobPostingScalarWhereWithAggregatesInput | JobPostingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JobPosting"> | string
    createdAt?: DateTimeWithAggregatesFilter<"JobPosting"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JobPosting"> | Date | string
    authorId?: StringWithAggregatesFilter<"JobPosting"> | string
    jobTitle?: StringWithAggregatesFilter<"JobPosting"> | string
    companyName?: StringWithAggregatesFilter<"JobPosting"> | string
    companyWebsite?: StringNullableWithAggregatesFilter<"JobPosting"> | string | null
    category?: StringWithAggregatesFilter<"JobPosting"> | string
    employmentType?: StringWithAggregatesFilter<"JobPosting"> | string
    salaryMin?: FloatNullableWithAggregatesFilter<"JobPosting"> | number | null
    salaryMax?: FloatNullableWithAggregatesFilter<"JobPosting"> | number | null
    salaryType?: StringWithAggregatesFilter<"JobPosting"> | string
    partOfTown?: StringNullableWithAggregatesFilter<"JobPosting"> | string | null
    workPresence?: StringWithAggregatesFilter<"JobPosting"> | string
    jobDescription?: StringWithAggregatesFilter<"JobPosting"> | string
    linkToApply?: StringNullableWithAggregatesFilter<"JobPosting"> | string | null
    contactEmail?: StringNullableWithAggregatesFilter<"JobPosting"> | string | null
    contactPhone?: StringNullableWithAggregatesFilter<"JobPosting"> | string | null
    customInstructions?: StringNullableWithAggregatesFilter<"JobPosting"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    password?: PasswordCreateNestedOneWithoutUserInput
    jobPostings?: JobPostingCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    password?: PasswordUncheckedCreateNestedOneWithoutUserInput
    jobPostings?: JobPostingUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: PasswordUpdateOneWithoutUserNestedInput
    jobPostings?: JobPostingUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: PasswordUncheckedUpdateOneWithoutUserNestedInput
    jobPostings?: JobPostingUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
  }

  export type PasswordCreateInput = {
    hash: string
    user: UserCreateNestedOneWithoutPasswordInput
  }

  export type PasswordUncheckedCreateInput = {
    hash: string
    userId: string
  }

  export type PasswordUpdateInput = {
    hash?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPasswordNestedInput
  }

  export type PasswordUncheckedUpdateInput = {
    hash?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PasswordUpdateManyMutationInput = {
    hash?: StringFieldUpdateOperationsInput | string
  }

  export type PasswordUncheckedUpdateManyInput = {
    hash?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type JobPostingCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    jobTitle: string
    companyName: string
    companyWebsite?: string | null
    category: string
    employmentType: string
    salaryMin?: number | null
    salaryMax?: number | null
    salaryType: string
    partOfTown?: string | null
    workPresence: string
    jobDescription: string
    linkToApply?: string | null
    contactEmail?: string | null
    contactPhone?: string | null
    customInstructions?: string | null
    author: UserCreateNestedOneWithoutJobPostingsInput
  }

  export type JobPostingUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
    jobTitle: string
    companyName: string
    companyWebsite?: string | null
    category: string
    employmentType: string
    salaryMin?: number | null
    salaryMax?: number | null
    salaryType: string
    partOfTown?: string | null
    workPresence: string
    jobDescription: string
    linkToApply?: string | null
    contactEmail?: string | null
    contactPhone?: string | null
    customInstructions?: string | null
  }

  export type JobPostingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    employmentType?: StringFieldUpdateOperationsInput | string
    salaryMin?: NullableFloatFieldUpdateOperationsInput | number | null
    salaryMax?: NullableFloatFieldUpdateOperationsInput | number | null
    salaryType?: StringFieldUpdateOperationsInput | string
    partOfTown?: NullableStringFieldUpdateOperationsInput | string | null
    workPresence?: StringFieldUpdateOperationsInput | string
    jobDescription?: StringFieldUpdateOperationsInput | string
    linkToApply?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    customInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    author?: UserUpdateOneRequiredWithoutJobPostingsNestedInput
  }

  export type JobPostingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    employmentType?: StringFieldUpdateOperationsInput | string
    salaryMin?: NullableFloatFieldUpdateOperationsInput | number | null
    salaryMax?: NullableFloatFieldUpdateOperationsInput | number | null
    salaryType?: StringFieldUpdateOperationsInput | string
    partOfTown?: NullableStringFieldUpdateOperationsInput | string | null
    workPresence?: StringFieldUpdateOperationsInput | string
    jobDescription?: StringFieldUpdateOperationsInput | string
    linkToApply?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    customInstructions?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JobPostingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    employmentType?: StringFieldUpdateOperationsInput | string
    salaryMin?: NullableFloatFieldUpdateOperationsInput | number | null
    salaryMax?: NullableFloatFieldUpdateOperationsInput | number | null
    salaryType?: StringFieldUpdateOperationsInput | string
    partOfTown?: NullableStringFieldUpdateOperationsInput | string | null
    workPresence?: StringFieldUpdateOperationsInput | string
    jobDescription?: StringFieldUpdateOperationsInput | string
    linkToApply?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    customInstructions?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JobPostingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    employmentType?: StringFieldUpdateOperationsInput | string
    salaryMin?: NullableFloatFieldUpdateOperationsInput | number | null
    salaryMax?: NullableFloatFieldUpdateOperationsInput | number | null
    salaryType?: StringFieldUpdateOperationsInput | string
    partOfTown?: NullableStringFieldUpdateOperationsInput | string | null
    workPresence?: StringFieldUpdateOperationsInput | string
    jobDescription?: StringFieldUpdateOperationsInput | string
    linkToApply?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    customInstructions?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PasswordNullableRelationFilter = {
    is?: PasswordWhereInput | null
    isNot?: PasswordWhereInput | null
  }

  export type JobPostingListRelationFilter = {
    every?: JobPostingWhereInput
    some?: JobPostingWhereInput
    none?: JobPostingWhereInput
  }

  export type JobPostingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PasswordCountOrderByAggregateInput = {
    hash?: SortOrder
    userId?: SortOrder
  }

  export type PasswordMaxOrderByAggregateInput = {
    hash?: SortOrder
    userId?: SortOrder
  }

  export type PasswordMinOrderByAggregateInput = {
    hash?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type JobPostingCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    jobTitle?: SortOrder
    companyName?: SortOrder
    companyWebsite?: SortOrder
    category?: SortOrder
    employmentType?: SortOrder
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    salaryType?: SortOrder
    partOfTown?: SortOrder
    workPresence?: SortOrder
    jobDescription?: SortOrder
    linkToApply?: SortOrder
    contactEmail?: SortOrder
    contactPhone?: SortOrder
    customInstructions?: SortOrder
  }

  export type JobPostingAvgOrderByAggregateInput = {
    salaryMin?: SortOrder
    salaryMax?: SortOrder
  }

  export type JobPostingMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    jobTitle?: SortOrder
    companyName?: SortOrder
    companyWebsite?: SortOrder
    category?: SortOrder
    employmentType?: SortOrder
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    salaryType?: SortOrder
    partOfTown?: SortOrder
    workPresence?: SortOrder
    jobDescription?: SortOrder
    linkToApply?: SortOrder
    contactEmail?: SortOrder
    contactPhone?: SortOrder
    customInstructions?: SortOrder
  }

  export type JobPostingMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    jobTitle?: SortOrder
    companyName?: SortOrder
    companyWebsite?: SortOrder
    category?: SortOrder
    employmentType?: SortOrder
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    salaryType?: SortOrder
    partOfTown?: SortOrder
    workPresence?: SortOrder
    jobDescription?: SortOrder
    linkToApply?: SortOrder
    contactEmail?: SortOrder
    contactPhone?: SortOrder
    customInstructions?: SortOrder
  }

  export type JobPostingSumOrderByAggregateInput = {
    salaryMin?: SortOrder
    salaryMax?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type PasswordCreateNestedOneWithoutUserInput = {
    create?: XOR<PasswordCreateWithoutUserInput, PasswordUncheckedCreateWithoutUserInput>
    connectOrCreate?: PasswordCreateOrConnectWithoutUserInput
    connect?: PasswordWhereUniqueInput
  }

  export type JobPostingCreateNestedManyWithoutAuthorInput = {
    create?: XOR<JobPostingCreateWithoutAuthorInput, JobPostingUncheckedCreateWithoutAuthorInput> | JobPostingCreateWithoutAuthorInput[] | JobPostingUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: JobPostingCreateOrConnectWithoutAuthorInput | JobPostingCreateOrConnectWithoutAuthorInput[]
    connect?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[]
  }

  export type PasswordUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PasswordCreateWithoutUserInput, PasswordUncheckedCreateWithoutUserInput>
    connectOrCreate?: PasswordCreateOrConnectWithoutUserInput
    connect?: PasswordWhereUniqueInput
  }

  export type JobPostingUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<JobPostingCreateWithoutAuthorInput, JobPostingUncheckedCreateWithoutAuthorInput> | JobPostingCreateWithoutAuthorInput[] | JobPostingUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: JobPostingCreateOrConnectWithoutAuthorInput | JobPostingCreateOrConnectWithoutAuthorInput[]
    connect?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PasswordUpdateOneWithoutUserNestedInput = {
    create?: XOR<PasswordCreateWithoutUserInput, PasswordUncheckedCreateWithoutUserInput>
    connectOrCreate?: PasswordCreateOrConnectWithoutUserInput
    upsert?: PasswordUpsertWithoutUserInput
    disconnect?: PasswordWhereInput | boolean
    delete?: PasswordWhereInput | boolean
    connect?: PasswordWhereUniqueInput
    update?: XOR<XOR<PasswordUpdateToOneWithWhereWithoutUserInput, PasswordUpdateWithoutUserInput>, PasswordUncheckedUpdateWithoutUserInput>
  }

  export type JobPostingUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<JobPostingCreateWithoutAuthorInput, JobPostingUncheckedCreateWithoutAuthorInput> | JobPostingCreateWithoutAuthorInput[] | JobPostingUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: JobPostingCreateOrConnectWithoutAuthorInput | JobPostingCreateOrConnectWithoutAuthorInput[]
    upsert?: JobPostingUpsertWithWhereUniqueWithoutAuthorInput | JobPostingUpsertWithWhereUniqueWithoutAuthorInput[]
    set?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[]
    disconnect?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[]
    delete?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[]
    connect?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[]
    update?: JobPostingUpdateWithWhereUniqueWithoutAuthorInput | JobPostingUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: JobPostingUpdateManyWithWhereWithoutAuthorInput | JobPostingUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: JobPostingScalarWhereInput | JobPostingScalarWhereInput[]
  }

  export type PasswordUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PasswordCreateWithoutUserInput, PasswordUncheckedCreateWithoutUserInput>
    connectOrCreate?: PasswordCreateOrConnectWithoutUserInput
    upsert?: PasswordUpsertWithoutUserInput
    disconnect?: PasswordWhereInput | boolean
    delete?: PasswordWhereInput | boolean
    connect?: PasswordWhereUniqueInput
    update?: XOR<XOR<PasswordUpdateToOneWithWhereWithoutUserInput, PasswordUpdateWithoutUserInput>, PasswordUncheckedUpdateWithoutUserInput>
  }

  export type JobPostingUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<JobPostingCreateWithoutAuthorInput, JobPostingUncheckedCreateWithoutAuthorInput> | JobPostingCreateWithoutAuthorInput[] | JobPostingUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: JobPostingCreateOrConnectWithoutAuthorInput | JobPostingCreateOrConnectWithoutAuthorInput[]
    upsert?: JobPostingUpsertWithWhereUniqueWithoutAuthorInput | JobPostingUpsertWithWhereUniqueWithoutAuthorInput[]
    set?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[]
    disconnect?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[]
    delete?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[]
    connect?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[]
    update?: JobPostingUpdateWithWhereUniqueWithoutAuthorInput | JobPostingUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: JobPostingUpdateManyWithWhereWithoutAuthorInput | JobPostingUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: JobPostingScalarWhereInput | JobPostingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPasswordInput = {
    create?: XOR<UserCreateWithoutPasswordInput, UserUncheckedCreateWithoutPasswordInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPasswordNestedInput = {
    create?: XOR<UserCreateWithoutPasswordInput, UserUncheckedCreateWithoutPasswordInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordInput
    upsert?: UserUpsertWithoutPasswordInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPasswordInput, UserUpdateWithoutPasswordInput>, UserUncheckedUpdateWithoutPasswordInput>
  }

  export type UserCreateNestedOneWithoutJobPostingsInput = {
    create?: XOR<UserCreateWithoutJobPostingsInput, UserUncheckedCreateWithoutJobPostingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutJobPostingsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutJobPostingsNestedInput = {
    create?: XOR<UserCreateWithoutJobPostingsInput, UserUncheckedCreateWithoutJobPostingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutJobPostingsInput
    upsert?: UserUpsertWithoutJobPostingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutJobPostingsInput, UserUpdateWithoutJobPostingsInput>, UserUncheckedUpdateWithoutJobPostingsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type PasswordCreateWithoutUserInput = {
    hash: string
  }

  export type PasswordUncheckedCreateWithoutUserInput = {
    hash: string
  }

  export type PasswordCreateOrConnectWithoutUserInput = {
    where: PasswordWhereUniqueInput
    create: XOR<PasswordCreateWithoutUserInput, PasswordUncheckedCreateWithoutUserInput>
  }

  export type JobPostingCreateWithoutAuthorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    jobTitle: string
    companyName: string
    companyWebsite?: string | null
    category: string
    employmentType: string
    salaryMin?: number | null
    salaryMax?: number | null
    salaryType: string
    partOfTown?: string | null
    workPresence: string
    jobDescription: string
    linkToApply?: string | null
    contactEmail?: string | null
    contactPhone?: string | null
    customInstructions?: string | null
  }

  export type JobPostingUncheckedCreateWithoutAuthorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    jobTitle: string
    companyName: string
    companyWebsite?: string | null
    category: string
    employmentType: string
    salaryMin?: number | null
    salaryMax?: number | null
    salaryType: string
    partOfTown?: string | null
    workPresence: string
    jobDescription: string
    linkToApply?: string | null
    contactEmail?: string | null
    contactPhone?: string | null
    customInstructions?: string | null
  }

  export type JobPostingCreateOrConnectWithoutAuthorInput = {
    where: JobPostingWhereUniqueInput
    create: XOR<JobPostingCreateWithoutAuthorInput, JobPostingUncheckedCreateWithoutAuthorInput>
  }

  export type PasswordUpsertWithoutUserInput = {
    update: XOR<PasswordUpdateWithoutUserInput, PasswordUncheckedUpdateWithoutUserInput>
    create: XOR<PasswordCreateWithoutUserInput, PasswordUncheckedCreateWithoutUserInput>
    where?: PasswordWhereInput
  }

  export type PasswordUpdateToOneWithWhereWithoutUserInput = {
    where?: PasswordWhereInput
    data: XOR<PasswordUpdateWithoutUserInput, PasswordUncheckedUpdateWithoutUserInput>
  }

  export type PasswordUpdateWithoutUserInput = {
    hash?: StringFieldUpdateOperationsInput | string
  }

  export type PasswordUncheckedUpdateWithoutUserInput = {
    hash?: StringFieldUpdateOperationsInput | string
  }

  export type JobPostingUpsertWithWhereUniqueWithoutAuthorInput = {
    where: JobPostingWhereUniqueInput
    update: XOR<JobPostingUpdateWithoutAuthorInput, JobPostingUncheckedUpdateWithoutAuthorInput>
    create: XOR<JobPostingCreateWithoutAuthorInput, JobPostingUncheckedCreateWithoutAuthorInput>
  }

  export type JobPostingUpdateWithWhereUniqueWithoutAuthorInput = {
    where: JobPostingWhereUniqueInput
    data: XOR<JobPostingUpdateWithoutAuthorInput, JobPostingUncheckedUpdateWithoutAuthorInput>
  }

  export type JobPostingUpdateManyWithWhereWithoutAuthorInput = {
    where: JobPostingScalarWhereInput
    data: XOR<JobPostingUpdateManyMutationInput, JobPostingUncheckedUpdateManyWithoutAuthorInput>
  }

  export type JobPostingScalarWhereInput = {
    AND?: JobPostingScalarWhereInput | JobPostingScalarWhereInput[]
    OR?: JobPostingScalarWhereInput[]
    NOT?: JobPostingScalarWhereInput | JobPostingScalarWhereInput[]
    id?: StringFilter<"JobPosting"> | string
    createdAt?: DateTimeFilter<"JobPosting"> | Date | string
    updatedAt?: DateTimeFilter<"JobPosting"> | Date | string
    authorId?: StringFilter<"JobPosting"> | string
    jobTitle?: StringFilter<"JobPosting"> | string
    companyName?: StringFilter<"JobPosting"> | string
    companyWebsite?: StringNullableFilter<"JobPosting"> | string | null
    category?: StringFilter<"JobPosting"> | string
    employmentType?: StringFilter<"JobPosting"> | string
    salaryMin?: FloatNullableFilter<"JobPosting"> | number | null
    salaryMax?: FloatNullableFilter<"JobPosting"> | number | null
    salaryType?: StringFilter<"JobPosting"> | string
    partOfTown?: StringNullableFilter<"JobPosting"> | string | null
    workPresence?: StringFilter<"JobPosting"> | string
    jobDescription?: StringFilter<"JobPosting"> | string
    linkToApply?: StringNullableFilter<"JobPosting"> | string | null
    contactEmail?: StringNullableFilter<"JobPosting"> | string | null
    contactPhone?: StringNullableFilter<"JobPosting"> | string | null
    customInstructions?: StringNullableFilter<"JobPosting"> | string | null
  }

  export type UserCreateWithoutPasswordInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    jobPostings?: JobPostingCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutPasswordInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    jobPostings?: JobPostingUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutPasswordInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPasswordInput, UserUncheckedCreateWithoutPasswordInput>
  }

  export type UserUpsertWithoutPasswordInput = {
    update: XOR<UserUpdateWithoutPasswordInput, UserUncheckedUpdateWithoutPasswordInput>
    create: XOR<UserCreateWithoutPasswordInput, UserUncheckedCreateWithoutPasswordInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPasswordInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPasswordInput, UserUncheckedUpdateWithoutPasswordInput>
  }

  export type UserUpdateWithoutPasswordInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    jobPostings?: JobPostingUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutPasswordInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    jobPostings?: JobPostingUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateWithoutJobPostingsInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    password?: PasswordCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutJobPostingsInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    password?: PasswordUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutJobPostingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJobPostingsInput, UserUncheckedCreateWithoutJobPostingsInput>
  }

  export type UserUpsertWithoutJobPostingsInput = {
    update: XOR<UserUpdateWithoutJobPostingsInput, UserUncheckedUpdateWithoutJobPostingsInput>
    create: XOR<UserCreateWithoutJobPostingsInput, UserUncheckedCreateWithoutJobPostingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutJobPostingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutJobPostingsInput, UserUncheckedUpdateWithoutJobPostingsInput>
  }

  export type UserUpdateWithoutJobPostingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: PasswordUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutJobPostingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: PasswordUncheckedUpdateOneWithoutUserNestedInput
  }

  export type JobPostingUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    employmentType?: StringFieldUpdateOperationsInput | string
    salaryMin?: NullableFloatFieldUpdateOperationsInput | number | null
    salaryMax?: NullableFloatFieldUpdateOperationsInput | number | null
    salaryType?: StringFieldUpdateOperationsInput | string
    partOfTown?: NullableStringFieldUpdateOperationsInput | string | null
    workPresence?: StringFieldUpdateOperationsInput | string
    jobDescription?: StringFieldUpdateOperationsInput | string
    linkToApply?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    customInstructions?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JobPostingUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    employmentType?: StringFieldUpdateOperationsInput | string
    salaryMin?: NullableFloatFieldUpdateOperationsInput | number | null
    salaryMax?: NullableFloatFieldUpdateOperationsInput | number | null
    salaryType?: StringFieldUpdateOperationsInput | string
    partOfTown?: NullableStringFieldUpdateOperationsInput | string | null
    workPresence?: StringFieldUpdateOperationsInput | string
    jobDescription?: StringFieldUpdateOperationsInput | string
    linkToApply?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    customInstructions?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JobPostingUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    employmentType?: StringFieldUpdateOperationsInput | string
    salaryMin?: NullableFloatFieldUpdateOperationsInput | number | null
    salaryMax?: NullableFloatFieldUpdateOperationsInput | number | null
    salaryType?: StringFieldUpdateOperationsInput | string
    partOfTown?: NullableStringFieldUpdateOperationsInput | string | null
    workPresence?: StringFieldUpdateOperationsInput | string
    jobDescription?: StringFieldUpdateOperationsInput | string
    linkToApply?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    customInstructions?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PasswordDefaultArgs instead
     */
    export type PasswordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PasswordDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JobPostingDefaultArgs instead
     */
    export type JobPostingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JobPostingDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}