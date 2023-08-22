import subprocess
import shutil

def extract_file(filename):
    try:
        # Determine if the file is a zip file
        if filename.endswith('.tar'):
            process = subprocess.Popen(['tar', 'xvf', filename], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
            output, error = process.communicate()
        else:
            shutil.unpack_archive(filename, extract_dir='.', format=None)

        # Output decompression state
        if process.returncode == 0:
            print('Unzip successfully')
        else:
            print('Unzip failed')

        # Output messages or errors during decompression
        if output:
            print(output.decode('utf-8'))
        if error:
            print(error.decode('utf-8'))
    except OSError as e:
        print(f'decompression error: {e}')

# usage example
filename = '/root/jsvu.tar'
extract_file(filename)