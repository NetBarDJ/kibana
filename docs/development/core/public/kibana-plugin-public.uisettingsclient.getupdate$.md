[Home](./index) &gt; [kibana-plugin-public](./kibana-plugin-public.md) &gt; [UiSettingsClient](./kibana-plugin-public.uisettingsclient.md) &gt; [getUpdate$](./kibana-plugin-public.uisettingsclient.getupdate$.md)

## UiSettingsClient.getUpdate$() method

Returns an Observable that notifies subscribers of each update to the uiSettings, including the key, newValue, and oldValue of the setting that changed.

<b>Signature:</b>

```typescript
getUpdate$(): Rx.Observable<{
        key: string;
        newValue: any;
        oldValue: any;
    }>;
```
<b>Returns:</b>

`Rx.Observable<{
        key: string;
        newValue: any;
        oldValue: any;
    }>`
