import React from 'react'
import styles from './Alerts.module.scss'
import Alert from './Alert/Alert'

const Alerts = ({ alerts, alertHandlers }) => (
  <div className={styles.Alerts}>
    {alerts.map(alert => (
      <Alert
        key={alert.id}
        {...alert}
        alertHandlers={alertHandlers}
      />
    ))}
  </div>
)

export default Alerts
