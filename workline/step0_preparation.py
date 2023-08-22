import subprocess
import shutil

def extract_file(filename):
    try:
        # 判断是否为压缩包文件
        if filename.endswith('.tar'):
            process = subprocess.Popen(['tar', 'xvf', filename], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
            output, error = process.communicate()
        else:
            shutil.unpack_archive(filename, extract_dir='.', format=None)

        # 输出解压状态
        if process.returncode == 0:
            print('解压成功')
        else:
            print('解压失败')

        # 输出解压过程中的信息或错误
        if output:
            print(output.decode('utf-8'))
        if error:
            print(error.decode('utf-8'))
    except OSError as e:
        print(f'解压错误: {e}')

# 使用示例
filename = '/root/jsvu.tar'
extract_file(filename)