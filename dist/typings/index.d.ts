import Auth0Client from './Auth0Client';
import { Auth0ClientOptions } from './global';
import './global';
export * from './global';
export default function createAuth0Client(options: Auth0ClientOptions): Promise<Auth0Client>;
export { Auth0Client };
export { GenericError, AuthenticationError, TimeoutError, PopupTimeoutError, PopupCancelledError } from './errors';
export { ICache, LocalStorageCache, InMemoryCache, Cacheable } from './cache';
