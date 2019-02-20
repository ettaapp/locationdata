module.exports = {
    'app_name': 'etta_api',
    'price_rate': 0.1,
    'night_rate': 0.02,
    'waiting_time_price_per_minute': 1,
    'database': {
        //'remote': 'mongodb://etta:etta1234@ds011399.mlab.com:11399/ettalocal',
        //'localDb': 'mongodb://etta:etta1234@ds011399.mlab.com:11399/ettalocal',
        'localDb': 'mongodb://localhost:27017/etta-db'
    },
    'levels': {
        'driver': 'driver',
        'finance': 'finance',
        'dispatcher': 'dispatcher',
        'supervisor': 'supervisor',
        'corporate_client': 'corporate_client',
        'admin': 'admin',
        'customer': 'customer',
        'data_analyst': 'data_analyst',
        'dispatcher_supervisor': 'dispatcher_supervisor'
    },
    'secret': 'I karamba',
    'base_url': '/api/v1',
    'urls': {
        'user': '/api/v1/user',
        'admin': '/api/v1/user/admin',
        'finance': '/api/v1/user/finance',
        'data_analyst': '/api/v1/user/data-analyst',
        'supervisor': '/api/v1/user/supervisor',
        'dispatcher': '/api/v1/user/dispatcher',
        'dispatcher_supervisor': '/api/v1/user/dispatcher_supervisor',
        'driver': '/api/v1/user/driver',
        'customer': '/api/v1/user/customer',
        'corporate': '/api/v1/corporate',
        'location': '/api/v1/location',
        'location_name':'/api/v1/location_name',
        'login': '/api/v1/login',
        'trip': '/api/v1/trip',
        'shift': '/api/v1/shift',
        'timestamp': '/api/v1/timestamp',
        'export__trip': '/api/v1/export/trip',
        'export__customer': '/api/v1/export/customer',
        'export__driver': '/api/v1/export/driver',
        'export__dispatcher': '/api/v1/export/dispatcher',
        'export__supervisor': '/api/v1/export/supervisor',
        'export__admin': '/api/v1/export/admin',
        'export__corporate_client': '/api/v1/export/corporate_client',
        'export__trip__timed': '/api/v1/export/trip/timed',
        'dispute': '/api/v1/dispute',
        'shift_report': '/api/v1/shift_report',
        'fettan_sms_api': 'https://api.myamole.com/ServiceUAT/FettanSVC.svc/api/FettanSVC'
    },
    'salt_rounds': 10,
    'server': {
        'remote': 'https://etta-app.herokuapp.com',
        'local': 'localhost:3000'
    },
    'trip_status': {
        'PENDING': 'pending',
        'ACCEPTED': 'accepted',
        'STARTED': 'started',
        'ARRIVED': 'arrived',
        'CANCELLED': 'cancelled',
        'COMPLETED': 'completed'
    },
    'driver_status': {
        'AVIALABLE': 'available',
        'ON_TRIP': 'on_trip',
        'OFFLINE': 'offline',
        'ASSIGNED': 'assigned'
    },
    'driver_trip': {
        'pending': 'available',
        'accepted': 'assigned',
        'started': 'on_trip',
        'cancelled': 'available',
        'arrived': 'assigned',
        'completed': 'available'
    },
    'cancellation_codes': {
        'cub not found': 'cub not found',
        'driver lost customer': 'driver lost customer',
        'driver late': 'driver late',
        'driver cancel request': 'driver cancel request',
        'customer cancel request': 'customer cancel request',
        'customer not responding': 'customer not responding',
        'dispatcher lapse' : 'dispatcher lapse'
    }
}
