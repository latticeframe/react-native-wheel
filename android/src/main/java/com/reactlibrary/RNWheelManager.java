package com.reactlibrary;

import android.view.Gravity;

import com.contrarywind.listener.OnItemSelectedListener;
import com.contrarywind.view.WheelView;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.RCTEventEmitter;
import com.reactlibrary.adapter.SelectAdapter;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class RNWheelManager extends SimpleViewManager<WheelView> {

    private static final String REACT_CLASS = "WheelViewAndroid";

    private static final String PROP_INDEX = "index";
    private static final String PROP_ITEMS = "items";
    private static final String EVENT_NAME_ON_VALUE_CHANGE = "onIndexChange";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected WheelView createViewInstance(final ThemedReactContext reactContext) {
        final WheelView wheelView = new WheelView(reactContext);
        wheelView.setCyclic(false);
        wheelView.setLineSpacingMultiplier(2.5f);
        wheelView.setGravity(Gravity.CENTER);
        wheelView.setTextColorOut(0xFFB4B4B4);
        wheelView.setTextColorCenter(0xFF383838);
        wheelView.setDividerColor(0xFFDFDFE0);


        wheelView.setOnItemSelectedListener(new OnItemSelectedListener() {
            @Override
            public void onItemSelected(int index) {
                WritableMap event = Arguments.createMap();
                event.putString("index", String.valueOf(index));
                reactContext
                        .getJSModule(RCTEventEmitter.class)
                        .receiveEvent(wheelView.getId(), EVENT_NAME_ON_VALUE_CHANGE, event);
            }
        });
        return wheelView;
    }

    @SuppressWarnings("unchecked")
    @ReactProp(name = PROP_ITEMS)
    public void setItems(WheelView wheelView, ReadableArray options) {

        final List<String> mItems = new ArrayList<>();
        for (int i = 0; i < options.size(); ++i) {
            ReadableMap option = options.getMap(i);
            mItems.add(option.getString("label"));
        }

        wheelView.setAdapter(new SelectAdapter(mItems));
    }

    @SuppressWarnings("unchecked")
    @ReactProp(name = PROP_INDEX)
    public void setIndex(WheelView wheelView, int index) {
        wheelView.setCurrentItem(index);
    }

    @SuppressWarnings("unchecked")
    @Override
    public Map getExportedCustomBubblingEventTypeConstants() {
        return MapBuilder.builder().put(EVENT_NAME_ON_VALUE_CHANGE, MapBuilder.of(
                "phasedRegistrationNames",
                MapBuilder.of("bubbled", EVENT_NAME_ON_VALUE_CHANGE))).build();
    }
}
