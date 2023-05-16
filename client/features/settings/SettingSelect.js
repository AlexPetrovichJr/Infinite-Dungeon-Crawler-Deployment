import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSettings } from './settingSelectSlice';

import { Link } from 'react-router-dom';

const SettingSelect = () => {
  const settingsArray = useSelector(state => state.settingSelect.settings);
  const status = useSelector(state => state.settingSelect.status);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSettings());
  }, [dispatch]);

  return (
    <div className='settingsContainer'>
      <h2>{'> Choose your setting'}</h2>

      <div className='settingList'>
        {status === 'loading' ? (
          <div>LOADING....</div>
        ) : (
          settingsArray.map(setting => (
            <Link
              state={{ settingName: setting.name }}
              key={setting.id}
              to={`/role/${setting.id}`}
            >
              <div className='singleSetting'>
                <section>
                  <h3> {setting.name.toUpperCase()}</h3>
                </section>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default SettingSelect;
