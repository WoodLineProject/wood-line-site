export const appSetting = {
    methods: {
        success: function() {
            this.$alertify.success('success');
        },
        alert: function() {
            this.$alertify.alert('This is alert', () =>
                this.$alertify.warning('alert is closed')
            );
        },
        alertWithTitle: function() {
            this.$alertify.alert('alert title', 'This is alert', () =>
                this.$alertify.warning('alert is closed')
            );
        },
        confirm: function() {
            this.$alertify.confirm(
                'This is comfirm',
                () => this.$alertify.success('ok'),
                () => this.$alertify.error('cancel')
            );
        },
        confirmWithTitle: function() {
            this.$alertify.confirm(
                'confirm title',
                'This is comfirm',
                () => this.$alertify.success('ok'),
                () => this.$alertify.error('cancel')
            );
        },
        prompt: function() {
            this.$alertify.prompt(
                'This is prompt',
                'default value',
                (evt, value) => this.$alertify.success('ok: ' + value),
                () => this.$alertify.error('cancel')
            );
        },
        promptWithTitle: function() {
            this.$alertify.promptWithTitle(
                'prompt title',
                'This is prompt',
                'default value',
                (evt, value) => this.$alertify.success('ok: ' + value),
                () => this.$alertify.error('cancel')
            );
        },
        promptWithTypeColor: function() {
            this.$alertify
                .promptWithTitle(
                    'prompt title',
                    'This is prompt',
                    'default value',
                    (evt, value) => this.$alertify.success('ok: ' + value),
                    () => this.$alertify.error('cancel')
                )
                .set('type', 'color');
        },
    },

    mounted: function() {
        setTimeout(() => {
            this.$alertify.success('Hell Alertify');
        }, 500);
    },
}
export const useProp = {
    // dialogs defaults
    autoReset: true,
        basic: false,
    closable: true,
    closableByDimmer: true,
    frameless: false,
    maintainFocus: true, // <== global default not per instance, applies to all dialogs
    maximizable: true,
    modal: true,
    movable: true,
    moveBounded: false,
    overflow: true,
    padding: true,
    pinnable: true,
    pinned: true,
    preventBodyShift: false, // <== global default not per instance, applies to all dialogs
    resizable: true,
    startMaximized: false,
    transition: 'pulse',

    // notifier defaults
    notifier: {
    // auto-dismiss wait time (in seconds)
    delay: 5,
        // default position
        position: 'top-right',
        // adds a close button to notifier messages
        closeButton: false,
    },

    // language resources
    glossary: {
        // dialogs default title
        title: 'AlertifyJS',
            // ok button text
            ok: 'OK',
            // cancel button text
            cancel: 'Cancel',
    },

    // theme settings
    theme: {
        // class name attached to prompt dialog input textbox.
        input: 'ajs-input',
            // class name attached to ok button
            ok: 'ajs-ok',
            // class name attached to cancel button
            cancel: 'ajs-cancel',
    },
}
