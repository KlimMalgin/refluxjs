var assign = require('react/lib/Object.assign'),
    ListenerMethods = require('./ListenerMethods');

/**
 * A module meant to be consumed as a mixin by a React component. Supplies the methods from
 * `ListenerMethods` mixin and takes care of teardown of subscriptions.
 *
 * Note that if you're using the `connect` mixin you don't need this mixin, as connect will
 * import everything this mixin contains!
 *
 * @mixin ListenerMixin
 */
module.exports = assign({

    /**
     * Cleans up all listener previously registered.
     */
    componentWillUnmount: ListenerMethods.stopListeningToAll

}, ListenerMethods);
